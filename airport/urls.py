from django.urls import path
from . import views

urlpatterns = [
    path('api/signup/', views.sign_up, name='api_signup'),
    path('api/login/', views.login, name='api_login'),
    path('api/flight/', views.flight, name='api_flight'),
    path('api/add_flight/',views.add_flights,name='api_add_flight'),
    path('api/traveler_info/',views.traveler_info,name='api_traveler_info'),
]