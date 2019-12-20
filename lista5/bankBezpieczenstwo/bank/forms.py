from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from bank.models import Przelew


class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')


class PrzelewForm(forms.Form):
    odbiorca = forms.CharField()
    rachunek = forms.CharField()
    kwota = forms.FloatField()
    data = forms.DateTimeField()
    tytul = forms.CharField()

    def is_valid(self):
        valid = super(forms.Form, self).is_valid()
        if not valid:
            return False

        if self.cleaned_data['kwota'] > 0 and self.cleaned_data['odbiorca'] and self.cleaned_data['rachunek'] and \
                self.cleaned_data['data'] and self.cleaned_data['tytul']:
            return True
        return False

    def save(self, user_id):
        newPrzelew = Przelew(From=user_id, odbiorca=self.cleaned_data['odbiorca'],
                             rachunek=self.cleaned_data['rachunek'], kwota=self.cleaned_data['kwota'],
                             data=self.cleaned_data['data'],
                             tytul=self.cleaned_data['tytul'])
        newPrzelew.save()


class AdminConfirmForm(forms.Form):
    id = forms.CharField(widget=forms.HiddenInput())

    def is_valid(self):
        valid = super(forms.Form, self).is_valid()
        if not valid:
            return False
        idv = self.cleaned_data['id']
        if idv.isdigit():
            return True
        return False

    def save(self):
        przelew = Przelew.objects.get(id=self.cleaned_data['id'])
        przelew.zatwierdzony = True
        przelew.save()
