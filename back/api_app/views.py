from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import Realty
from .serializers import RealtySerializer

class RealtyAPIViewSet(viewsets.ReadOnlyModelViewSet):
    """Using ModelViewSet to combine the logic of the ListAPIView and RetrieveAPIView"""
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer

class RealtyCreateAPIView(generics.CreateAPIView):
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer

class RealtyUpdateAPIView(generics.UpdateAPIView):
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer
