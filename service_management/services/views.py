from django.shortcuts import render
from rest_framework import viewsets
from .models import Component, Vehicle, Issue,Revenue
from .serializers import ComponentSerializer, VehicleSerializer, IssueSerializer,RevenueSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Issue
from rest_framework.response import Response
from django.db.models import Sum
from datetime import datetime, timedelta

class ComponentViewSet(viewsets.ModelViewSet):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    

class RevenueViewSet(viewsets.ModelViewSet):
    queryset = Revenue.objects.all()
    serializer_class = RevenueSerializer

@api_view(['POST'])
def calculate_final_price(request):
    vehicle_id = request.data.get('vehicle_id')
    issues = Issue.objects.filter(vehicle_id=vehicle_id)
    total_price = sum(issue.repair_price if issue.is_repair else issue.component.price for issue in issues)
    return Response({'total_price': total_price}, status=status.HTTP_200_OK)


@api_view(['GET'])
def revenue_report(request):
    period = request.query_params.get('period', 'daily')
    year = request.query_params.get('year')
    month = request.query_params.get('month')
    day = request.query_params.get('day')

    if year and month and day:
        try:
            end_date = datetime(int(year), int(month), int(day)).date()
        except ValueError:
            return Response({'error': 'Invalid date provided'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        end_date = datetime.now().date()

    if period == 'daily':
        start_date = end_date
    elif period == 'monthly':
        start_date = end_date.replace(day=1)
    elif period == 'yearly':
        start_date = end_date.replace(month=1, day=1)
    else:
        return Response({'error': 'Invalid period'}, status=status.HTTP_400_BAD_REQUEST)

    revenues = Revenue.objects.filter(date__range=[start_date, end_date]).values('date').annotate(total=Sum('amount'))
    return Response(revenues, status=status.HTTP_200_OK)


