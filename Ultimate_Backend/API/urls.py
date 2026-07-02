from django.urls import path
# 1. Import the 'products' module from the 'views' folder
from .views import products 

urlpatterns = [
    # 2. Call the functions using products.function_name
    path('products/', products.product_list),
    path('products/<int:product_id>/', products.product_detail)
]