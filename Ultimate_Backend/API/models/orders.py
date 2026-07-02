from django.db import models
from .users import User
from .products import Product

class Order(models.Model):
    SERVICE_CHOICES = [
        ('take-out', 'take-out'),
        ('dine-in', 'dine-in')
    ]
    
    STATUS_CHOICES = [
        ('Pending','Pending'),
        ('Preparing','Preparing'),
        ('Ready','Ready'),
        ('Completed','Completed')
    ]

    # just trim the split by '-' to then save the ORD then get the current id number
    # base on number of digits of current number add front zero to complete the 5 digits receipt and make it string
    # the 'ORD-' + 'string id number'.
    order_number = models.CharField(max_length=20, unique=True, editable=False) 
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    order_service = models.CharField(max_length=100, choices=SERVICE_CHOICES)
    order_total = models.DecimalField(max_digits=8, decimal_places=2)
    order_status = models.CharField(max_length=100, choices=STATUS_CHOICES, default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.order_number} {self.user.first_name} {self.user.last_name}'

class Payment(models.Model):

    PAYMENT_CHOICES = [
        ('gcash','gcash'),
        ('paymaya', 'paymaya'),
        ('otc', 'otc') # this is cash over the counter
    ]

    PAYMENT_STATUS = [
        ('Paid', 'Paid'),
        ('Pending', 'Pending'),
    ]

    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='payments')
    transaction_id = models.CharField(max_length=100)
    payment_method = models.CharField(max_length=100, choices=PAYMENT_CHOICES)
    payment_status = models.CharField(max_length=100, choices=PAYMENT_STATUS, default='Pending')
    amount_paid = models.DecimalField(max_digits=8, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.transaction_id


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, related_name='items', null=True)
    product_name = models.CharField(max_length=100)
    product_price = models.DecimalField(max_digits=8, decimal_places=2)
    selections = models.JSONField(default = dict)
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=8, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.quantity} x {self.product_name}"
