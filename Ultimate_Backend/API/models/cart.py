from django.db import models
from .products import Product, Size, Flavor, Drink, AddOn
from .customer import Customer


class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='cart_items')
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='cart_items')
    selections = models.JSONField(default = dict)
    quantity = models.PositiveIntegerField(default=1)
    total_price = models.DecimalField(max_digits=8, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



    def __str__(self):
        return f'{self.customer.first_name} {self.customer.last_name} {self.product.name}'