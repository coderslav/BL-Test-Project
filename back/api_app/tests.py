from django.test import TestCase
from django.urls import reverse
from .models import Realty
from rest_framework import status

# Create your tests here.


class ApiTest(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        cls.Realty = Realty.objects.create(
            title='Test realty',
            address='Some house, some street, some city, some country',
            transaction='RN',
            realty_type='RT',
        )

    def test_realty_content(self):
        self.assertEqual(self.Realty.id, 1)
        self.assertEqual(self.Realty.title, 'Test realty')
        self.assertEqual(self.Realty.address, 'Some house, some street, some city, some country')
        self.assertEqual(self.Realty.transaction, 'RN')
        self.assertEqual(self.Realty.realty_type, 'RT')
        self.assertTrue(self.Realty.date)
        self.assertEqual(str(self.Realty), 'Test realty')

    # def test_todoAPI_listview(self):
    #     response = self.client.get(reverse('todo_list'))
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertEqual(Todo.objects.count(), 2)
    #     for todo in Todo.objects.all():
    #         self.assertContains(response, todo)

    # def test_todoAPI_detail(self):
    #     response = self.client.get(
    #         reverse('todo_detail', kwargs={'pk': self.Todo_second.id}), format='json')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertEqual(Todo.objects.count(), 2)
    #     self.assertContains(response, 'Todo for test')
