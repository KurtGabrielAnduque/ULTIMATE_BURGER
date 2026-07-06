from rest_framework import serializers
from api.models import Address
import re

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['street', 'barangay', 'city', 'region', 'zip_code']

    def validate_zip_code(self, zip_code):
        if not zip_code or not str(zip_code).strip():
            raise serializers.ValidationError("Please avoid leaving the zip code empty.")
        
        clean_zip = str(zip_code).strip()
        
        # Example: Ensure zip code is exactly 4 digits (Standard for Philippines)
        if not re.match(r'^\d{4}$', clean_zip):
            raise serializers.ValidationError("Zip code must be exactly 4 digits.")
            
        return clean_zip

    def validate_street(self, street):
        if not street or not street.strip():
            raise serializers.ValidationError("Please provide a valid street address.")
        
        # Clean up extra spaces
        clean_street = ' '.join(street.split())
        return clean_street
    
    def validate_barangay(self, barangay):
        if not barangay or not barangay.strip():
            raise serializers.ValidationError("Please provide a valid barangay.")
        
        # Clean up extra spaces
        clean_barangay = ' '.join(barangay.split())
        return clean_barangay
    

    def validate_city(self, city):
        if not city or not city.strip():
            raise serializers.ValidationError("Please provide a valid city.")
        
        # Clean up extra spaces
        clean_city = ' '.join(city.split())
        return clean_city
    
    def validate_region(self, region):
        if not region or not region.strip():
            raise serializers.ValidationError("Please provide a valid region.")
        
        # Clean up extra spaces
        clean_region = ' '.join(region.split())
        return clean_region
    


    

