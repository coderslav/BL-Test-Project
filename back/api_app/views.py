from rest_framework import viewsets
from .models import Realty
from .serializers import RealtySerializer

# Create your views here.
class RealtyAPIViewSet(viewsets.ModelViewSet):
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer
