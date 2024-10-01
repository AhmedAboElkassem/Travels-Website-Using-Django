from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse
import json
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import SignUp,Flight,TravelerInfo

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

def flight(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            from_location = data.get('from')
            to_location = data.get('to')
            date = data.get('date')
        except json.JSONDecodeError:
            return JsonResponse({'message': 'error', 'details': 'Invalid JSON data.'}, status=400)
        if not from_location or not to_location or not date:
            return JsonResponse({'signup': False, 'message': 'All fields are required.'}, status=400)
        
        flights = Flight.objects.filter(
            from_location__iexact=from_location,
            to_location__iexact=to_location,
            date=date
        )

        
        if not flights.exists():
            return JsonResponse({"message": "No flights found matching the criteria."}, status=404)

        
        flight_list = []
        for flight in flights:
            flight_list.append({
                "id": flight.flight_id,
                "from": flight.from_location,
                "to": flight.to_location,
                "date": flight.date.strftime("%Y-%m-%d"),
                "price": f"${flight.price:.2f}",
                "airline": flight.airline,
                "duration": flight.duration,
            })

        return JsonResponse(flight_list, safe=False)
    
    return JsonResponse({'login': False, 'message': 'Invalid request method'}, status=405)
def add_flights(request):
    if request.method == 'POST':
        try:
            
            data = json.loads(request.body)

            
            for flight_data in data:
                flight = Flight(
                    from_location=flight_data['from'],
                    to_location=flight_data['to'],
                    date=flight_data['date'],
                    price=float(flight_data['price'].replace('$', '')),
                    airline=flight_data['airline'],
                    duration=flight_data['duration']
                )
                flight.save()

            return JsonResponse({"message": "Flights added successfully!"}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=400)
def traveler_info(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)

        try:
            traveler = TravelerInfo(
            FirstName =data.get('firstName'),
            MiddleName = data.get('middleName'),
            LastName = data.get('lastName'),
            Suffix=data.get('suffix'),
            Dob=data.get('dob'),
            email =data.get('email'),
            phone = data.get('phone'),
            RedressNumber=data.get('redressNumber'),
            knownTravelerNumber=data.get('knownTravelerNumber'),
            emergencyFirstName=data.get('emergencyFirstName'),
            emergencyLastName=data.get('emergencyLastName'),
            emergencyEmail=data.get('emergencyEmail'),
            emergencyPhone=data.get('emergencyPhone')
            )
            traveler.save()
            return JsonResponse({"message": "Info added successfully!"}, status=201)
        except Exception as e:
             return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=400)