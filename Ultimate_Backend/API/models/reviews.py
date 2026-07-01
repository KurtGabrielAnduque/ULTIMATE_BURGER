from django.db import models
from .customer import Customer

class Review(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='reviews')
    rating_star = models.DecimalField(max_digits=2, decimal_places=1)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.customer.first_name} {self.customer.last_name} {self.rating_star}'