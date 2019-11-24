from django.db import models
from django.contrib.auth.models import User


class Przelew(models.Model):
    From = models.ForeignKey(User, on_delete=models.CASCADE)
    odbiorca = models.CharField(max_length=200)
    rachunek = models.CharField(max_length=32)
    kwota = models.FloatField(default=0.00)
    data = models.DateTimeField('d')
    tytul = models.CharField(max_length=200)

    def __str__(self):
        return self.tytul


class Konto(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    cash = models.FloatField(default=0.00)

    def __str__(self):
        return self.name + " " + self.surname
