from rest_framework import serializers
from api.models import Review, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name']

class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['user', 'rating_star', 'text', 'created_at']