from rest_framework import serializers
from api.models import Product, Sauce, Drink, AddOn, Size, Flavor
from api.models import Cart
from api.models import User
from decimal import Decimal


# create a serializer for selections addons and drinks and sauce aswell:
class AddonSerializer(serializers.Serializer):
    addonId = serializers.PrimaryKeyRelatedField(queryset = AddOn.objects.all(), required = False)

    sauces = serializers.PrimaryKeyRelatedField(
        queryset = Sauce.objects.all(),
        many = True, # because our payload in sauces are [1] it need to be in list form
        required = False
    )

class DrinkSerializer(serializers.Serializer):
    drinkId = serializers.PrimaryKeyRelatedField(queryset = Drink.objects.all())


class SelectionSerializer(serializers.Serializer):
    flavor = serializers.PrimaryKeyRelatedField(queryset = Flavor.objects.all(), required = False, allow_null = True)
    size = serializers.PrimaryKeyRelatedField(queryset = Size.objects.all(), required=False, allow_null = True)
    addons = AddonSerializer(many=True, required = False, allow_null = True)
    drinks = DrinkSerializer(many=True, required = False, allow_null = True)


class AddToCartSerializer(serializers.ModelSerializer):

    selections = SelectionSerializer()
    product = serializers.PrimaryKeyRelatedField(queryset = Product.objects.all())
    # user = serializer.PrimaryKeyRelatedField(queryset = User.object.all())

    class Meta:
        model = Cart
        fields = ['product','user','quantity','selections']


    def validate_quantity(self, quantity):
        if quantity <= 0:
            raise serializers.ValidationError(
                "Quantity input is invalid please apply proper quantity before add to cart"
            )
        return quantity
    
    def validate_product(self, product):
        if not product.is_available:
            raise serializers.ValidationError(
                "Unavailable product cant add to cart, pls try other products"
            )

        return product
    
    def validate(self, data):
        # validate if the id of size does not match to its product id
        product = data.get('product')
        selections = data.get('selections',{})
        selected_size = selections.get('size')
        max_quantity = 50 # checking for max orders
        quantity_data = data.get('quantity')

        if selected_size:
            if selected_size.product != product: # compare the product of selected size since we implement foreign keys for product to the actual product sent
                raise serializers.ValidationError(
                    "The provided size is not belong to this product"
                )
            

        # validate if the id of flavor does not match to its product id
        selected_flavor = selections.get('flavor',{})

        if selected_flavor:
            if selected_flavor.product != product:
                raise serializers.ValidationError(
                    "The provided flavor is not belong to this product"
                )
        
        # validating messy many to many data start with addon
        addons_data = selections.get('addons',[])
        for addon in addons_data:
            addon_obj = addon.get('addonId')
            if addon_obj and addon_obj not in product.addons.all():
                raise serializers.ValidationError(
                    "This addon is not available for the selected product."
                )
            
            # sauce id is not found in the list of know sauce
            sauce_obj = addon.get('sauces', [])
            for sauce in sauce_obj:
                if sauce not in addon_obj.sauces.all():
                    raise serializers.ValidationError(
                        "This sauce is not available for the selected product."
                    )
        
        # validate drinks
        drinks_data = selections.get('drinks', [])
        for drink in drinks_data:
            drink_obj = drink.get('drinkId')
            if drink_obj and drink_obj not in product.drinks.all():
                raise serializers.ValidationError(
                    "This drink is not available for the selected product."
                )
        
        # dont abuse quantity data
        if quantity_data > max_quantity:
            raise serializers.ValidationError(
                "call the owner if this quantity order is true"
            )

        return data


    # create the save function
    def create(self, validated_data):
        product = validated_data.get('product')
        quantity = validated_data.get('quantity')
        selections = validated_data.get('selections',{})
        selected_flavor = selections.get('flavor')
        selected_size = selections.get('size')
        selected_addons = selections.get('addons',[])
        selected_drinks = selections.get('drinks',[])

        total = Decimal(product.base_price)

        if selected_flavor:
            total += selected_flavor.price
        
        if selected_size:
            total = selected_size.price # since we need to change the base value of the product according to size

        for addon in selected_addons:
            total += addon['addonId'].price
        
        for drink in selected_drinks:
            total += drink['drinkId'].price
        
        final_price = total * quantity


        # convert back to json field but now we must use the validated data
        selection_json = {
            "flavor": (
                selected_flavor.id
                if selected_flavor else None
            ),

            "size": (
                selected_size.id
                if selected_size else None
            ),

            "addons": [
                {
                    "addonId": addon["addonId"].id,
                    "sauces": [
                        sauce.id
                        for sauce in addon.get("sauces", [])
                    ]
                }
                for addon in selected_addons
            ],

            "drinks": [
                {
                    "drinkId": drink["drinkId"].id
                }
                for drink in selected_drinks
            ]
        }

        # save to cart
        cart_item = Cart.objects.create(
            product = product,
            #user = 
            selections = selection_json,
            quantity = quantity,
            total_price = final_price
        )


        return cart_item
