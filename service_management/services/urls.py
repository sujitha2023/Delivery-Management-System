from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ComponentViewSet, RevenueViewSet, VehicleViewSet, IssueViewSet, calculate_final_price, revenue_report

router = DefaultRouter()
router.register(r'components', ComponentViewSet)
router.register(r'vehicles', VehicleViewSet)
router.register(r'issues', IssueViewSet)
router.register(r'revenues', RevenueViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('calculate-final-price/', calculate_final_price, name='calculate-final-price'),
    path('revenue-report/', revenue_report, name='revenue-report'),
]
