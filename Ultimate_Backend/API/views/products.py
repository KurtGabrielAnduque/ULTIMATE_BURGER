from django.shortcuts import render

#import the model
from api.models import Product
from api.serializers import ProductListSerializer # for general
from api.serializers import ProductDetailSerializer # full detail I think I should not include the many to many serializers
# since its already inside it?

# import other module utilities
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def product_list(request):

    if request.method == 'GET':
        # filter only products that is avilable for showing to the users
        
        products = Product.objects.filter(is_available=True)


        serializer = ProductListSerializer(products, many = True)

        return Response(serializer.data)
    

@api_view(['GET'])
def product_detail(request, product_id):

    # get the specific product detail of the provided product id
    # this must be done if the user click any of the menu card we must get that id 
    try:
        product = Product.objects.get(id = product_id, is_available=True)
    
    # safe net, if product is not found
    except Product.DoesNotExist:
        return Response(
                    {"detail": "Product not found."},
                    status=status.HTTP_404_NOT_FOUND
                )


    if request.method == 'GET':
        
        serializer = ProductDetailSerializer(product)

        return Response(serializer.data)
    