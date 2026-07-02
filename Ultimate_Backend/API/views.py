from django.shortcuts import render

#import the model
from .models import Product, Sauce, Drink, AddOn, Size, Flavor
from .serializers import ProductListSerializer # for general
from .serializers import ProductDetailSerializer # full detail I think I should not include the many to many serializers
# since its already inside it?

# import other module utilities
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def product_list(request):

    if request.method == 'GET':
        get_all_products = Product.objects.all(is_available=True)


        serializer = ProductListSerializer(get_all_products, many = True)

        return Response(serializer.data)
    

@api_view(['GET'])
def product_list_details(request, id):

    # get the specific product detail of the provided product id
    # this must be done if the user click any of the menu card we must get that id 
    try:
        product_detail = Product.objects.get(id = id)
    
    # safe net, if product is not found
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


    if request.method == 'GET':
        
        serializer = ProductDetailSerializer(product_detail)

        return Response(serializer.data)
    