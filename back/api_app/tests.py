from django.test import TestCase
from django.urls import reverse
from .models import TransactionType, RealtyType, Realty
from rest_framework import status

# Create your tests here.


class ApiTest(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        cls.transaction_type = TransactionType.objects.create(
            title = 'Some transaction type'
        )
        cls.realty_type = RealtyType.objects.create(
            title = 'Some realty type'
        )
        cls.realty = Realty.objects.create(
            title='Test realty',
            address='Some house, some street, some city, some country',
            transaction=cls.transaction_type,
            realty_type=cls.realty_type,
        )
        
    def test_realty_content(self):
        self.assertEqual(self.realty.id, 1)
        self.assertEqual(self.realty.title, 'Test realty')
        self.assertEqual(self.realty.address, 'Some house, some street, some city, some country')
        self.assertEqual(str(self.realty.transaction), 'Some transaction type')
        self.assertEqual(str(self.realty.realty_type), 'Some realty type')
        self.assertTrue(self.realty.date)
        self.assertEqual(str(self.realty), 'Test realty')
    
    def test_transaction_type_content(self):
        self.assertEqual(self.transaction_type.id, 1)
        self.assertEqual(self.transaction_type.title, 'Some transaction type')
        self.assertEqual(str(self.transaction_type), 'Some transaction type')
    
    def test_realty_type_content(self):
        self.assertEqual(self.realty_type.id, 1)
        self.assertEqual(self.realty_type.title, 'Some realty type')
        self.assertEqual(str(self.realty_type), 'Some realty type')
