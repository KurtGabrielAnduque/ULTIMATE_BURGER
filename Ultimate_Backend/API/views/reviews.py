from django.shortcuts import render

#import the model
from api.models import Review, User
from api.serializers import ReviewCreateSerializer # for posting reviews
from api.serializers import ReviewSerializer
# since its already inside it?

# import other module utilities
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def create_review(request):
    review = request.data

    serializer = ReviewCreateSerializer(data = review)

    if serializer.is_valid():
        serializer.save()

        return Response(
                {"message": "Your review is sent successfully"},
                status=status.HTTP_201_CREATED
            )
    
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def review_list(request):

    reviews = Review.objects.filter(rating_star = 5)

    # get review for showing in the review page
    if request.method == 'GET':
        serializer = ReviewSerializer(reviews, many = True)

        return Response(serializer.data)
    
