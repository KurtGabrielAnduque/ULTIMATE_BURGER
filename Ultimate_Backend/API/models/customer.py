from django.db import models


# create the model for Customer
class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True) #since every user emails must be unique
    contact_number = models.CharField(max_length=20, unique=True) #since every user contact number must be unique
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
