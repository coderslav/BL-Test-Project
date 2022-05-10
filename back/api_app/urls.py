from django.urls import path
from .views import RealtyAPIViewSet, RealtyCreateAPIView, RealtyUpdateAPIView, RealtyDeleteAPIView

urlpatterns = [
    path('realties/', RealtyAPIViewSet.as_view({'get': 'list'}), name='realties-list'),
    path('realties/<int:pk>/', RealtyAPIViewSet.as_view({'get': 'retrieve'}), name='realty-detail'),
    path('realties/create/', RealtyCreateAPIView.as_view(), name='realty-create'),
    path('realties/update/<int:pk>/', RealtyUpdateAPIView.as_view(), name='realty-update'),
    path('realties/delete/<int:pk>/', RealtyDeleteAPIView.as_view(), name='realty-delete')
]