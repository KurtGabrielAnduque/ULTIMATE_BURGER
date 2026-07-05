from rest_framework import serializers
from api.models import Cart
from ..products import ProductListSerializer



class CartSerializer(serializers.ModelSerializer):
    product = ProductListSerializer(read_only = True)

    class Meta:
        model = Cart
        fields = ['id','product','user','quantity','selections','total_price']