from django.db import models

# many to many
# drinks and AddOns
# we will insert it to PRODUCT AS MANY TO MANY
class Drink(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f'{self.name}'


class AddOn(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)


    def __str__(self):
        return f'{self.name}'
    
    
class Product(models.Model):
    # Create a selection for category
    CATEGORIES_CHOICES = [
        ('burger','burger'),
        ('sides','sides'),
        ('pizza','pizza'),
        ('pizzaBurger','pizzaBurger'),
        ('pizzaBurger2in1','pizzaBurger2in1')
    ]

    # Apply the selections here
    category = models.CharField(max_length=100, choices=CATEGORIES_CHOICES)
    name  = models.CharField(max_length=100)
    # for now since its just for testing in local
    # for image we store here the filepathing of images since all of my images now are infrontend
    image = models.CharField(max_length=255)
    base_price = models.DecimalField(max_digits=8, decimal_places=2)
    rating_stars = models.DecimalField(max_digits=2, decimal_places=1, default=0)
    rating_count = models.IntegerField(default=0)
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    # include the many to many fields here
    addons = models.ManyToManyField(AddOn, blank=True)
    drinks = models.ManyToManyField(Drink, blank=True)

    def __str__(self):
        return f'{self.name}'


# Start with one to many which is the Fries flavor and pizza sizes
class Size(models.Model):
    # IF THE PRODUCT DELETE OFCOURSE IT SIZE ALSO DELETE
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='sizes')
    name = models.CharField(max_length=100)
    additional_price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f'{self.name}'

class Flavor(models.Model):
    # if product delete
    product = models.ForeignKey(Product,on_delete=models.CASCADE, related_name='flavors')
    name = models.CharField(max_length=100)
    additional_price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f'{self.name}'


