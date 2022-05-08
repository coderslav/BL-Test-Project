from rest_framework import serializers
from .models import Realty

class RealtySerializer(serializers.ModelSerializer):
    title =serializers.CharField()
    address = serializers.CharField()
    transaction_type = serializers.CharField(source='transaction_type.title')
    realty_type = serializers.CharField(source='realty_type.title')
    pub_date = serializers.DateTimeField(format='%d-%m-%Y, %H:%M:%S')
    created_at = serializers.DateTimeField(format='%d-%m-%Y, %H:%M:%S')
    updated_at = serializers.DateTimeField(format='%d-%m-%Y, %H:%M:%S')
    class Meta:
        model = Realty
        fields = '__all__'
