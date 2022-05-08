from rest_framework.routers import SimpleRouter
from .views import RealtyAPIViewSet

# Using SimpleRouter for unification of requests of the list and detail realties (realties/ and realties/<int:pk>)
router = SimpleRouter()
router.register("realties", RealtyAPIViewSet, basename="realties")
urlpatterns = router.urls