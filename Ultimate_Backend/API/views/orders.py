from django.shortcuts import render

#import the model
from api.models import Order, OrderItem
from api.serializers import PostOrderSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def post_order(request):

    if request.method == 'POST':

        user_order = request.data
        serializer = PostOrderSerializer(data = user_order)


        if serializer.is_valid():
            serializer.save()

            return Response(
                {"message": "Success"},
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

        