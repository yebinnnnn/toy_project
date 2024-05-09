from rest_framework import serializers
from .models import GuestBook

class GuestBookserializer(serializers.ModelSerializer):

    class Meta:
        model=GuestBook
        exclude=['password']

        #fields=['title','writer','content']
        #exclude=['password']
