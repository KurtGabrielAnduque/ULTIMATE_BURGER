from rest_framework import serializers
from api.models import Product, Drink, AddOn, Size, Flavor, Sauce

# Start with the general end point /Product/
class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'image','base_price',
                  'rating_stars', 'rating_count', 'is_available']


class SauceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sauce
        fields = ['id','name']

class AddOnSerializer(serializers.ModelSerializer):

    sauces = SauceSerializer(many = True, read_only = True)


    class Meta:
        model = AddOn
        fields = ['id','name','price', 'sauces']

class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ['id','name','price']

# I think the base price of the product is base on the default size in such menu such as fries, and pizzas
# because when use are increasing the size in the selection they are reffering to the main product
# so if the size become large, the price of the large becomes the base price now.
class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['id','name','price'] # see, in my model i name it as additional_price. I think it should be named as base price?


class FlavorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flavor
        fields = ['id', 'name', 'price']


# now we proceed to detailed part of serializing the product
class ProductDetailSerializer(serializers.ModelSerializer):
    # OnetoMany
    flavors = FlavorSerializer(many = True, read_only = True)
    sizes = SizeSerializer(many = True, read_only = True)
    # ManytoMany
    addons = AddOnSerializer(many = True, read_only = True)
    drinks = DrinkSerializer(many =True, read_only = True)

    class Meta:
        model = Product
        fields = [
            'id', 'category', 'name', 'image','base_price',
            'rating_stars', 'rating_count', 'is_available',
            # Add the one to many
            'flavors', 'sizes',
            # add the many to many
            'addons', 'drinks',
        ]



