from rest_framework import serializers
from .models import Realty, TransactionType, RealtyType
from django.db import IntegrityError

class RealtySerializer(serializers.ModelSerializer):
    title =serializers.CharField()
    address = serializers.CharField()
    transaction_type = serializers.SlugRelatedField(slug_field='title', queryset=TransactionType.objects.all())
    realty_type = serializers.SlugRelatedField(slug_field='title', queryset=RealtyType.objects.all())
    pub_date = serializers.DateTimeField(format='%d-%m-%Y, %H:%M:%S')
    created_at = serializers.DateTimeField(read_only=True, format='Server time(UTC) %d-%m-%Y, %H:%M:%S')
    updated_at = serializers.DateTimeField(read_only=True, format='Server time(UTC) %d-%m-%Y, %H:%M:%S')
    class Meta:
        model = Realty
        fields = '__all__'

