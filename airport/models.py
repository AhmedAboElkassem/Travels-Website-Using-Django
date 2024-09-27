from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class SignUp(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField('user email', unique=True)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name

    # Create a User instance when saving SignUp
    def save(self, *args, **kwargs):
        if not User.objects.filter(email=self.email).exists():
            # Create a corresponding User in the auth system
            User.objects.create_user(
                username=self.name,
                email=self.email,
                password=make_password(self.password)  # Hash the password
            )
        super(SignUp, self).save(*args, **kwargs)
