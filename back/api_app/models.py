from django.db import models

# Create your models here.


class Realty(models.Model):
    TRANSACTION_TYPE_CHOICES = [
        ('RN', 'Rental'),
        ('SL', 'Sale'),
    ]
    REALTY_TYPE_CHOICES = [
        ('OF', 'Office'),
        ('LP', 'Land plot'),
        ('WH', 'Warehouse'),
        ('RT', 'Retail'),
        ('CW', 'Coworking')
    ]

    title = models.CharField(
        max_length=250,
        verbose_name='realty name'
    )
    address = models.CharField(
        max_length=500,
        verbose_name='realty location'
    )
    transaction = models.CharField(
        max_length=2,
        choices=TRANSACTION_TYPE_CHOICES,
        default='RN',
        verbose_name='transaction type'
    )
    realty_type = models.CharField(
        max_length=2,
        choices=REALTY_TYPE_CHOICES,
        default='OF',
        verbose_name='realty type'
    )
    date = models.DateTimeField(
        auto_now_add=True,
        verbose_name='publication date'
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Realty'
        verbose_name_plural = 'Realties'
