from rest_framework import serializers
from api.models import Review



class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['user','rating_star', 'text']


    def validate_rating_star(self, rating_star):
        if rating_star > 5 or rating_star <= 0:
            raise serializers.ValidationError(
                "Number of star sent to review are invalid"
            )
        
        return rating_star
    
    def validated_text(self, text):
        if len(text) > 2000:
            raise serializers.ValidationError(
                "the length of your comment is to long for our server to hold pls limit it to 2,000 characters."
            )
        
        if not text.strip():
            raise serializers.ValidationError(
                "Comment must contain text, pls avoid posting white spaces"
            )
        

        return text
    
    '''
    Future update, only customer with history of order can post comments
    completed_order = Order.objects.filter(
        user=user,
        status="Completed"
    ).exists()

    if not completed_order:
        raise serializers.ValidationError(
            "Only customers with completed orders can leave a review."
    )
    '''


    
    

