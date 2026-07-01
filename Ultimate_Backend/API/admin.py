from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Address)
admin.site.register(Product)
admin.site.register(Size)
admin.site.register(Flavor)
admin.site.register(AddOn)
admin.site.register(Drink)
admin.site.register(Cart)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(Payment)
admin.site.register(OrderItem)
admin.site.register(Sauce)

