from django.urls import path
# 1. Import the 'products' module from the 'views' folder
from .views import products, cart, reviews, users, orders

urlpatterns = [
    # 2. Call the functions using products.function_name
    path('products/', products.product_list), # showing general product list
    path('products/<int:product_id>/', products.product_detail), # showing in depth details of a specific product
    path('cart/', cart.create_cart), # post method for add to cart
    path('cart/user/<int:user_id>/', cart.user_cart), # showing the cart items of a specific user
    path('cart/item/<int:cart_id>/', cart.delete_cart_item), # Delete a specific cart item
    path('reviews/', reviews.review_list),# show all reviews
    path('reviews/post/', reviews.create_review), # post method review
    path('user/profile/<int:user_id>/', users.user_profile),
    path('user/order/', orders.post_order)
]