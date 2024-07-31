from rest_framework import serializers
from .models import Component, Vehicle, Issue,Revenue

class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = '__all__'

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = '__all__'
        
class RevenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Revenue
        fields ='__all__'