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
        cls.realty_1 = Realty.objects.create(
            title = 'Test realty',
            address = 'Some house, some street, some city, some country',
            transaction_type = cls.transaction_type,
            realty_type = cls.realty_type,
            pub_date = '2022-05-08 14:17:42.883254+00:00'
        )
        cls.realty_2 = Realty.objects.create(
            title = 'Second realty test',
            address = 'Nice house, Nice street, Nice city, Nice country',
            transaction_type = cls.transaction_type,
            realty_type = cls.realty_type,
            pub_date = '2022-05-08 14:18:42.883254+00:00'
        )
        
    def test_realty_content(self):
        self.assertEqual(self.realty_1.id, 1)
        self.assertEqual(self.realty_1.title, 'Test realty')
        self.assertEqual(self.realty_1.address, 'Some house, some street, some city, some country')
        self.assertEqual(str(self.realty_1.transaction_type), 'Some transaction type')
        self.assertEqual(str(self.realty_1.realty_type), 'Some realty type')
        self.assertIn('2022-05', self.realty_1.pub_date)
        self.assertTrue(self.realty_1.created_at)
        self.assertTrue(self.realty_1.updated_at)
        self.assertEqual(str(self.realty_1), 'Test realty')
    
    def test_transaction_type_content(self):
        self.assertEqual(TransactionType.objects.count(), 1)
        self.assertEqual(self.transaction_type.id, 1)
        self.assertEqual(self.transaction_type.title, 'Some transaction type')
        self.assertTrue(self.transaction_type.created_at)
        self.assertTrue(self.transaction_type.updated_at)
        self.assertEqual(str(self.transaction_type), 'Some transaction type')
    
    def test_realty_type_content(self):
        self.assertEqual(RealtyType.objects.count(), 1)
        self.assertEqual(self.realty_type.id, 1)
        self.assertEqual(self.realty_type.title, 'Some realty type')
        self.assertTrue(self.realty_type.created_at)
        self.assertTrue(self.realty_type.updated_at)
        self.assertEqual(str(self.realty_type), 'Some realty type')
    
    def test_realtyAPI_listview(self):
        response = self.client.get(reverse('realties-list'))
        self.assertEqual(Realty.objects.count(), 2)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        for realty in Realty.objects.all():
            self.assertContains(response, realty)
    
    def test_realtyAPI_detail(self):
        response = self.client.get(reverse('realty-detail', kwargs={'pk': self.realty_2.id}), format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, 'Nice house')

    def test_realtyAPI_create(self):
        response = self.client.post(reverse('realty-create'), {
            'title': 'Third realty test',
            'address': 'Big house, Big street, Big city, Big country',
            'transaction_type': self.transaction_type.title,
            'realty_type': self.realty_type.title,
            'pub_date': '2022-05-04T09:30:51.998Z'
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Realty.objects.count(), 3)
        test_against = Realty.objects.get(title='Third realty test')
        self.assertEqual(str(test_against), 'Third realty test')
        # Test for new realty creating with non-existent transaction type
        bad_response = self.client.post(reverse('realty-create'), {
            'title': 'Third realty test',
            'address': 'Big house, Big street, Big city, Big country',
            'transaction_type': self.transaction_type.title + 'x',
            'realty_type': self.realty_type.title,
            'pub_date': '2022-05-04T09:30:51.998Z'
        }, format='json')
        self.assertEqual(bad_response.status_code, status.HTTP_400_BAD_REQUEST)
    
    def test_realtyAPI_update(self):
        response = self.client.patch(reverse('realty-update', kwargs={'pk': self.realty_2.id}), {
            'title': 'Fourth realty test',
            'address': 'Middle house, Middle street, Middle city, Middle country',
            'pub_date': '2022-01-17T15:31:52.998Z'
        }, format='json', content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        test_against = Realty.objects.get(title='Fourth realty test')
        self.assertEqual(str(test_against), 'Fourth realty test')
        self.assertEqual(test_against.address, 'Middle house, Middle street, Middle city, Middle country')
        self.assertEqual(test_against.title, 'Fourth realty test')
        self.assertIn('2022-01', str(test_against.pub_date))
        self.assertEqual(test_against.transaction_type, self.transaction_type)
        self.assertEqual(test_against.realty_type, self.realty_type)
    
    def test_realtyAPI_delete(self):
        response = self.client.delete(reverse('realty-delete', kwargs={'pk': self.realty_1.id}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Realty.objects.count(), 1)
        self.assertEqual(Realty.objects.filter(title='Test realty').exists(), False)
