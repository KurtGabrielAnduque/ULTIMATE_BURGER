from django.db import models
from .products import Product, Size, Flavor, Drink, AddOn
from .users import User


class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='cart_items')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cart_items')
    selections = models.JSONField(default = dict)
    quantity = models.PositiveIntegerField(default=1)
    total_price = models.DecimalField(max_digits=8, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name} {self.product.name}'