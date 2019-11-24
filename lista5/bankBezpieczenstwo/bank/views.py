from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.shortcuts import render, redirect

from bank.forms import SignUpForm, PrzelewForm
from bank.models import Przelew


def index(request):
    return HttpResponse("Welcome to your hackable bank :). How we can lose money today?")


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
        przelews = Przelew.objects.filter(From=request.user)
        context = {
            'przelews': [{'odbiorca': p.odbiorca,'kwota': p.kwota,'tytul':p.tytul,'data':p.data,'rachunek':p.rachunek} for p in przelews]
        }
        return render(request, 'bank/przelewsAll.html', context)
    else:
        return redirect('login')
