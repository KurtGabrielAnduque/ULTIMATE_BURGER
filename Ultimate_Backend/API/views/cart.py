from django.shortcuts import render

#import the model
from api.models import Cart
from api.serializers import AddToCartSerializer, CartSerializer

# since its already inside it?

# import other module utilities
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET','DELETE'])
def user_cart(request, user_id):

    try:
        user_cart = Cart.objects.filter(user = user_id)

    except Cart.DoesNotExist:
        return Response(
                    {"detail": "This user cart is not found"},
                    status=status.HTTP_404_NOT_FOUND
                )

    if request.method == 'GET':

        serializer = CartSerializer(user_cart, many = True)

        return Response(serializer.data)
    


@api_view(['POST'])
def create_cart(request):
    if request.method == 'POST':
        user_cart = request.data

        serializer = AddToCartSerializer(data = user_cart)


        if serializer.is_valid():
            serializer.save()

            
            return Response(
                {"message": "Success"},
                status=status.HTTP_201_CREATED
            )
        
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)