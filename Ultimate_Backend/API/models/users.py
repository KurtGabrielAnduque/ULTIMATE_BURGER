from django.db import models


# create the model for Customer
class User(models.Model):
    ROLE_CHOICES = [
    ("customer", "Customer"),
    ("staff", "Staff"),
    ("owner", "Owner"),
    ]

    LOGIN_PROVIDER = [
    ("google", "Google"),
    ("facebook", "Facebook"),
    ]


    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    role = models.CharField(max_length=100, choices=ROLE_CHOICES, default='Member')
    
    email = models.EmailField(unique=True) #since every user emails must be unique
    contact_number = models.CharField(max_length=20, unique=True) #since every user contact number must be unique

    provider = models.CharField(max_length=100, choices=LOGIN_PROVIDER)
    provider_user_id = models.CharField(max_length=255, unique=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    

# I think a user can have any address
class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='address')
    street = models.CharField(max_length=100)
    barangay  = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.street} {self.barangay}'
