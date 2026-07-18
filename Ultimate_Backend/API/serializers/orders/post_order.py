from rest_framework import serializers
from api.models import Order, Product, User, OrderItem, Cart
import re
from decimal import Decimal

"""
{
  "user": 1,
  "cart_items": [
    24,
    28
  ],
  "order_service": "dine-in",
  "payment_method": "gcash",
  "shipping_street": "49 Int. Tomas Morato",
  "shipping_barangay": "Brgy. Kristong Hari",
  "shipping_city": "Navotas City",
  "shipping_region": "Metro Manila",
  "shipping_zip_code": "1112"
}
"""
class PostOrderSerializer(serializers.ModelSerializer):

    user = serializers.PrimaryKeyRelatedField(queryset = User.objects.all())

    # notice that we include a field that doesnt exist in our Order Model
    # these are cart_items and order_service so we have to create it here
    # dont worry it will just a temporary holder it will not aaffect the model

    cart_items = serializers.ListField(child = serializers.IntegerField())
    payment_method = serializers.ChoiceField(choices = ['gcash','paymaya','otc'])


    class Meta:
        model = Order
        fields = ['user', 'cart_items', 'order_service', 'payment_method',
                  'shipping_street', 'shipping_barangay','shipping_city','shipping_region',
                  'shipping_zip_code']
        

    # validation for user

    # validation for cart_Items
    def validate_cart_items(self, cart_items):
        if len(cart_items) <= 0:
            raise serializers.ValidationError(
                'Currently there are no items listed inside your cart'
            )
        
        return cart_items
    
    def validate_shipping_street(self, shipping_street):
        if not shipping_street or not shipping_street.strip():
            raise serializers.ValidationError("Please provide a valid street address.")
        
        # Clean up extra spaces
        clean_street = ' '.join(shipping_street.split())
        return clean_street

    def validate_shipping_barangay(self, shipping_barangay):
        if not shipping_barangay or not shipping_barangay.strip():
            raise serializers.ValidationError("Please provide a valid barangay.")
        
        # Clean up extra spaces
        clean_barangay = ' '.join(shipping_barangay.split())
        return clean_barangay
    
    def validate_shipping_city(self, shipping_city):
        if not shipping_city or not shipping_city.strip():
            raise serializers.ValidationError("Please provide a valid city.")
        
        # Clean up extra spaces
        clean_city = ' '.join(shipping_city.split())
        return clean_city
    
    def validate_shipping_region(self, shipping_region):
        if not shipping_region or not shipping_region.strip():
            raise serializers.ValidationError("Please provide a valid region.")
        
        # Clean up extra spaces
        clean_region = ' '.join(shipping_region.split())
        return clean_region
    
    def validate_shipping_zip_code(self, shipping_zip_code):
        if not shipping_zip_code or not str(shipping_zip_code).strip():
            raise serializers.ValidationError("Please avoid leaving the zip code empty.")
        
        clean_zip = str(shipping_zip_code).strip()
        
        # Example: Ensure zip code is exactly 4 digits (Standard for Philippines)
        if not re.match(r'^\d{4}$', clean_zip):
            raise serializers.ValidationError("Zip code must be exactly 4 digits.")
            
        return clean_zip

    def validate(self, data):

        # create a list to store validated carts
        validated_cart = []

        cart_items = data['cart_items']
        user = data['user']

        for cart_id in cart_items:
            # the whole object
            cart = Cart.objects.filter(id = cart_id, user = user).first()

            if cart is None:
                raise serializers.ValidationError(f'The cart id: {cart_id} does not even exist')

            # append the validated cart data
            validated_cart.append(cart)

        # now we can create a new column in the data that stores the carts that we validated
        # this is good because we are not going to try querying in the creation part

        data['validated_cart'] = validated_cart


        return data
            

    
    def create(self, validated_data):
        cart_items = validated_data.pop('cart_items', None)
        validated_cart = validated_data.pop('validated_cart',None)
        payment_method = validated_data.pop('payment_method',None)

        order_total = Decimal(0)


        for cart_item in validated_cart:
            order_total += cart_item.total_price


        order = Order.objects.create(
            **validated_data,
            order_total = order_total
        )

        order.order_numer = f'ORD-{order.id:05d}'
        order.save(update_fields=['order_number'])

        for cart_item in validated_cart:
            OrderItem.objects.create(
            order = order,# I dont we havent create the Order yet,
            product = cart_item.product,
            product_name = cart_item.product.name,
            product_price = cart_item.product.base_price,
            selections = cart_item.selections,
            quantity = cart_item.quantity,
            total_price = cart_item.total_price,
        )

        return order



    

    


