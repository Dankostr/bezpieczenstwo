from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('przelew', views.przelew, name='przelew'),
    path('login',
         auth_views.LoginView.as_view(redirect_authenticated_user=True, template_name='registration/login.html'),
         name='login'),
    path('signup', views.singup, name='signup'),
    path('logout', auth_views.LogoutView.as_view(), name='logout'),
    path('przelew/confirm', views.przelewconfirm, name='przelewConfirm'),
    path('przelew/all', views.checkPrzelews, name='checkPrzelews'),
    path('password_reset', auth_views.PasswordResetView.as_view(), name="passwordReset"),
    path('adminConfirm', views.confirmPrzelewByAdmin, name='adminConfirm'),
    path('vunerable',views.injection_vunerable_site,name='vunerable')
]
