from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Vehicle, Component, Issue

class IssueViewSetTests(TestCase):
    def setUp(self):
        self.client = APIClient()  # Initialize APIClient
        # Create test vehicles and components
        self.vehicle = Vehicle.objects.create(vehicle_model='Toyota', vehicle_owner= "Sujitha", license_plate='qwerty123')
        self.component = Component.objects.create(component_name='Test Component', price=150.00)
        
        # Create URL for Issue viewset
        self.url = reverse('issue-list')

    def test_create_issue(self):
        # Data to create a new issue
        data = {
            'vehicle': self.vehicle.id,
            'component': self.component.id,
            'description': 'Issue description',
            'repair_price': '100.00',
            'is_repair': True
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Issue.objects.count(), 1)
        self.assertEqual(Issue.objects.get().description, 'Issue description')

    def test_list_issues(self):
        # Create a sample issue
        Issue.objects.create(
            vehicle=self.vehicle,
            component=self.component,
            description='Sample Issue',
            repair_price='50.00',
            is_repair=True
        )
        response = self.client.get(self.url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)  # Assuming there's only one issue
        self.assertEqual(response.data[0]['description'], 'Sample Issue')
