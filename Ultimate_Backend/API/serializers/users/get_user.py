from rest_framework import serializers
from api.models import User, Address


class GetAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id','street', 'barangay', 'city', 'region', 'zip_code']


class GetUserSerializer(serializers.ModelSerializer):
    address = GetAddressSerializer(many = True, read_only = True)

    class Meta:
        model = User
        fields = ['first_name','last_name','role' ,'email', 'contact_number', 'address']