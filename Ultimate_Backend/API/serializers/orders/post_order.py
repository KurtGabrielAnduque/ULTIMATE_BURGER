from rest_framework import serializers
from models.api import Order, Product, User

class PostOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id']

