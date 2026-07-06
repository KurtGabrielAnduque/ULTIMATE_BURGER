from rest_framework import serializers
from api.models import User, Address
from .patch_address import AddressSerializer
from django.db import transaction
import re


class PatchUserSerializer(serializers.ModelSerializer):
    address = AddressSerializer(many = True)

    class Meta:
        model = User
        fields =['first_name','last_name','email','contact_number','address']
        # should I include the: provider and provider_user_id?

    def validate_first_name(self, first_name):

        if not first_name or not first_name.strip():
            raise serializers.ValidationError(
                "Pls avoid leavinng the first name empty"
            )
        

        # check if there are numbers in the name input
        if not re.match(r"^[A-Za-z\s.'-]+$", first_name):
            raise serializers.ValidationError(
                "Your firstname contains digits and special characters, pls input proper format"
            )
        
        # proper formatting for name title case
        clean_first_name = first_name.title()
        clean_first_name = clean_first_name.split() # incase of wide white space between name
        clean_first_name = ' '.join(clean_first_name)

        return clean_first_name
    

    def validate_last_name(self, last_name):
        if not last_name or not last_name.strip():
            raise serializers.ValidationError(
                "Pls avoid leavinng the last name empty"
            )
        
        if not re.match(r"^[A-Za-z\s.'-]+$", last_name):
            raise serializers.ValidationError(
                "Your lastname contains digits and special characters, pls input proper format"
            )
        
        # proper formatting for name title case
        clean_last_name = last_name.title()
        clean_last_name = clean_last_name.split() # incase of wide white space between name
        clean_last_name = ' '.join(clean_last_name)

        return clean_last_name


    # phone number validation
    def validate_contact_number(self, contact_number):
        # if the field is empty
        if not contact_number or not contact_number.strip():
            raise serializers.ValidationError(
                "Pls avoid leaving the contact number empty"
            )
        

        clean_contact = contact_number.strip()
        clean_contact = clean_contact.replace(" ", "").replace("-", "")

        ph_phone_regex = re.compile(r'^(09|\+639)\d{9}$')
        
        if not ph_phone_regex.match(clean_contact):
            raise serializers.ValidationError(
                "Contact number must be a valid Philippine mobile number (e.g., 09123456789 or +639123456789)."
            )

        # Return the sanitized data
        return clean_contact
    
    def validate_email(self, email):
        if not email or not email.strip():
            raise serializers.ValidationError("Please avoid leaving the email empty.")

        clean_email = email.strip().lower()

        if User.objects.exclude(pk=self.instance.pk).filter(email=clean_email).exists():
            raise serializers.ValidationError(
                "This email is already in use."
            )

        return clean_email
    
    @transaction.atomic # roll back if anything to previous content
    # if any errors occur during the update consistent application of good pracitce
    
    def update(self, instance, validated_data):
        # seperate the address because it contains a nested data
        # only remains ['first_name','last_name','email','contact_number']
        # which is match for the User model
        address_data = validated_data.pop('address', None)


        # loop through every instances and save its value to it correspondingly
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        
        # save the new datas into User Model
        instance.save()

        # check if the address_data is empty first
        if address_data:
            # delte old address of user
            instance.address.all().delete()

            for data in address_data:
                data['country'] = data.get('country', 'Philippines') # apply a default country
                Address.objects.create(user = instance, **data) # create the object directly to Address model which is already import


        # after that lets save
        return instance


        


