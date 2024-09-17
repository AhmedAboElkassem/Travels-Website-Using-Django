from django.db import models
from django.contrib.auth.hashers import make_password

class SignUp(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField('user email')
    password = models.CharField(max_length=128)  # Store the hashed password
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name

    # Override the save method to hash the password
    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(SignUp, self).save(*args, **kwargs)
