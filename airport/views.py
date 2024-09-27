from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse
import json
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import SignUp

def sign_up(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            password = data.get('password')
            phone = data.get('phone')
        except json.JSONDecodeError:
            return JsonResponse({'message': 'error', 'details': 'Invalid JSON data.'}, status=400)

        # Ensure all fields are provided
        if not name or not email or not password or not phone:
            return JsonResponse({'signup': False, 'message': 'All fields are required.'}, status=400)

        # Check if email already exists in the User model
        if User.objects.filter(email=email).exists():
            return JsonResponse({'signup': False, 'message': 'Email already registered.'}, status=400)

        # Create a new user in the User model
        user = User.objects.create_user(username=name, email=email, password=password)
        
        # Save additional user data in SignUp model
        new_user = SignUp(name=name, email=email, phone=phone)
        new_user.save()

        # Create a token for the newly created user
        token = Token.objects.create(user=user)
        
        return JsonResponse({
            'message': 'success',
            'user': {
                'name': new_user.name,
                'email': new_user.email,
                  # Return token in response
            },
            'token': token.key,
        }, status=201)

    return JsonResponse({'signup': False, 'message': 'Invalid request method'}, status=405)

def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
        except json.JSONDecodeError:
            return JsonResponse({'message': 'error', 'details': 'Invalid JSON data.'}, status=400)

        # Find the user by email
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return JsonResponse({'login': False, 'message': 'User does not exist'}, status=404)

        # Check if password is correct
        if user.check_password(password):
            # Generate or retrieve the token for the user
            token, created = Token.objects.get_or_create(user=user)
            return JsonResponse({
                'login': True,
                'message': 'Login successful',
                'token': token.key  # Return the token in the response
            }, status=200)
        else:
            return JsonResponse({'login': False, 'message': 'Invalid password'}, status=400)

    return JsonResponse({'login': False, 'message': 'Invalid request method'}, status=405)
