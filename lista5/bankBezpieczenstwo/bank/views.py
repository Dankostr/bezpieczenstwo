from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from bank.forms import SignUpForm, PrzelewForm, AdminConfirmForm
from bank.models import Przelew
from django.db import connection


def index(request):
    if request.user.is_authenticated:
        return render(request, "bank/indexLogin.html")
    else:
        return render(request, "bank/indexNotLog.html")


def przelew(request):
    if request.user.is_authenticated:
        form = PrzelewForm()
        if request.method == "POST":
            form = PrzelewForm(request.POST)
            if form.is_valid:
                request.session['przelew'] = request.POST
                return redirect('przelewConfirm')
        return render(request, 'bank/przelew.html', {'form': form})
    else:
        return redirect('login')


def przelewconfirm(request):
    if request.user.is_authenticated:
        if not request.session['przelew']:
            redirect(request, 'przelew')
        form = PrzelewForm(request.session['przelew'])
        if request.method == "POST":
            if form.is_valid():
                request.session.delete('przelew')
                form.save(request.user)
                return render(request, 'bank/przelewDone.html', {'form': form})
        return render(request, 'bank/przelewConfirm.html', {'form': form})
    else:
        return redirect('login')


def account(request):
    if request.user.is_authenticated:
        return render(request, 'bank/account')
    else:
        return redirect('login')


def singup(request):
    if request.method == "POST" and request.user.is_anonymous:
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password1")
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('index')
    else:
        form = SignUpForm()
    return render(request, 'registration/singup.html', {'form': form})


def checkPrzelews(request):
    if request.user.is_authenticated:
        przelews = Przelew.objects.filter(From=request.user).filter(zatwierdzony=True)
        context = {
            'przelews': [{'odbiorca': p.odbiorca, 'kwota': p.kwota, 'tytul': p.tytul, 'data': p.data,
                          'rachunek': p.rachunek} for p in przelews]
        }
        return render(request, 'bank/przelewsAll.html', context)
    else:
        return redirect('login')

@csrf_exempt
def confirmPrzelewByAdmin(request):
    if request.user.is_authenticated and request.user.is_superuser:
        if request.method == "GET":
            form = AdminConfirmForm(request.GET)
            if form.is_valid():
                form.save()
        else:
            form = AdminConfirmForm()
        przelews = Przelew.objects.filter(zatwierdzony=False)
        context = {
            'form': form,
            'przelews': [
                {'id': p.id, 'from': p.From, 'odbiorca': p.odbiorca, 'kwota': p.kwota, 'tytul': p.tytul, 'data': p.data,
                 'rachunek': p.rachunek} for
                p in przelews]
        }
        return render(request, 'bank/adminConfirm.html', context)
    else:
        return redirect('index')


def injection_vunerable_site(request):
    if request.user.is_authenticated:
        data = request.POST.get('date', "None")
        print(data)
        sql = "SELECT id,`From_id`,odbiorca,kwota,tytul,data,rachunek FROM bank_przelew WHERE (data>'%s' OR '%s' = 'None' )AND `From_id`=%s " % (
        data, data, request.user.id)
        print(sql)
        sql = sql.split(';')
        with connection.cursor() as cursor:
            for s in sql:
                wyniki = cursor.execute(s).fetchall()
                print(wyniki)
        # wyniki = Przelew.objects.raw(sql)
        context = {
            'przelews': [
                {'id': p[0], 'from': p[1], 'odbiorca': p[2], 'kwota': p[3], 'tytul': p[4], 'data': p[5],
                 'rachunek': p[6]} for
                p in wyniki]
        }
        return render(request, 'bank/vunerable.html', context)
