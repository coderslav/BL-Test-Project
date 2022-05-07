from rest_framework import generics
from .models import Realty
from .serializers import RealtySerializer

# Create your views here.
class CreateRealtyAPIView(generics.CreateAPIView):
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer
    
class DetailRealtyAPIView(generics.RetrieveUpdateAPIView):
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer

class ListRealtyAPIView(generics.ListAPIView):
    queryset = Realty.objects.all()
    serializer_class = RealtySerializer