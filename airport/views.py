from django.shortcuts import render, redirect
from .models import SignUp
from django.contrib.auth.hashers import make_password
from django.shortcuts import redirect
from django.contrib.auth.hashers import check_password
from .models import SignUp
from django.http import JsonResponse
def sign_up(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        phone = request.POST.get('phone')

        
        if not name or not email or not password or not phone:
            return JsonResponse({'signup': False, 'message': 'All fields are required.'}, status=400)

        
        if SignUp.objects.filter(email=email).exists():
            return JsonResponse({'signup': False, 'message': 'Email already registered.'}, status=400)

        
        new_user = SignUp(name=name, email=email, password=password, phone=phone)
        new_user.save()

        return JsonResponse({'signup': True, 'message': 'User registered successfully!'}, status=201)

    return JsonResponse({'signup': False, 'message': 'Invalid request method'}, status=405)
def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        
        try:
            user = SignUp.objects.get(email=email)
        except SignUp.DoesNotExist:
            return JsonResponse({'login': False, 'message': 'User does not exist'}, status=404)

        
        if check_password(password, user.password):
            
            return JsonResponse({'login': True, 'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'login': False, 'message': 'Invalid password'}, status=400)

    return JsonResponse({'login': False, 'message': 'Invalid request method'}, status=405)