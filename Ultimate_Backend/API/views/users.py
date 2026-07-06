from django.shortcuts import render

#import the model
from api.models import User, Address
from api.serializers import PatchUserSerializer, GetUserSerializer

# since its already inside it?

# import other module utilities
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['PUT','GET'])
def user_profile(request, user_id):
    
    try:
        user = User.objects.get(id = user_id)

    except User.DoesNotExist:
        return Response(
                    {"detail": "This user cart is not found"},
                    status=status.HTTP_404_NOT_FOUND
                )

    if request.method == 'GET':
        serializer = GetUserSerializer(user)

        return Response(serializer.data)
    

    elif request.method == 'PUT':

        serializer = PatchUserSerializer(user, data = request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status = status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)