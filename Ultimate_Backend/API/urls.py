from django.urls import path
# 1. Import the 'products' module from the 'views' folder
from .views import products, cart 

urlpatterns = [
    # 2. Call the functions using products.function_name
    path('products/', products.product_list),
    path('products/<int:product_id>/', products.product_detail),
    path('cart/', cart.create_cart),
    path('cart/user/<int:user_id>/', cart.user_cart)
]