from django.test import TestCase
from django.urls import reverse
from .models import Realty
from rest_framework import status

# Create your tests here.


class ApiTest(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        cls.realty = Realty.objects.create(
            title='Test realty',
            address='Some house, some street, some city, some country',
            transaction=1,
            realty_type=1,
        )

    def test_realty_content(self):
        print(self.realty)
        self.assertEqual(self.realty.id, 1)
        self.assertEqual(self.realty.title, 'Test realty')
        self.assertEqual(self.realty.address, 'Some house, some street, some city, some country')
        self.assertEqual(self.realty.transaction, 'RN')
        self.assertEqual(self.realty.realty_type, 'RT')
        self.assertTrue(self.realty.date)
        self.assertEqual(str(self.realty), 'Test realty')
