from rest_framework import serializers
from models.api import Order, Product, User, OrderItem, Cart
import re

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
    class Meta:
        model = Order
        fields = ['user', 'cart_items', 'service_type', 'payment_method',
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
    
    def validate_shipping_zip_code(self, shipping_zip_code):
        if not shipping_zip_code or not str(shipping_zip_code).strip():
            raise serializers.ValidationError("Please avoid leaving the zip code empty.")
        
        clean_zip = str(shipping_zip_code).strip()
        
        # Example: Ensure zip code is exactly 4 digits (Standard for Philippines)
        if not re.match(r'^\d{4}$', clean_zip):
            raise serializers.ValidationError("Zip code must be exactly 4 digits.")
            
        return clean_zip

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
    

    

    


