from django.db import models
from django.utils import timezone

# Create your models here.
class Component(models.Model):
    component_name = models.CharField(max_length=70)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_new = models.BooleanField(default=True)

class Vehicle(models.Model):
    license_plate = models.CharField(max_length=10)
    vehicle_model = models.CharField(max_length=100)
    vehicle_owner = models.CharField(max_length=100)

class Issue(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    component = models.ForeignKey(Component, on_delete=models.CASCADE)
    description = models.TextField()
    repair_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    is_repair = models.BooleanField(default=True)
    
class Revenue(models.Model):
    date = models.DateField(default=timezone.now)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()

    def __str__(self):
        return f"{self.date} - {self.amount}"
