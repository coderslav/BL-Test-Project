from rest_framework import viewsets
from .models import Realty
from .serializers import RealtySerializer

# Using ModelViewSet to combine the logic of the ListAPIView and RetrieveAPIView 
class RealtyAPIViewSet(viewsets.ModelViewSet):
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer
