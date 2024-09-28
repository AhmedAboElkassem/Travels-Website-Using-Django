from django.urls import path
from . import views

urlpatterns = [
    path('api/signup/', views.sign_up, name='api_signup'),
    path('api/login/', views.login, name='api_login'),
    path('api/flight/', views.flight, name='api_flight'),
    
]