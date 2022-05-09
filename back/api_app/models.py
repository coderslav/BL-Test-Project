from django.db import models
from django.utils import timezone

# Create your models here.
class TransactionType(models.Model):
    title = models.CharField(
        max_length=250,
        verbose_name='name of transaction type',
        )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class RealtyType(models.Model):
    title = models.CharField(
        max_length=250,
        verbose_name='name of realty type',
        )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
        
class Realty(models.Model):
    title = models.CharField(
        max_length=250,
        verbose_name='realty name',
    )
    address = models.TextField(
        verbose_name='realty location'
    )
    transaction_type = models.ForeignKey(
        TransactionType,
        on_delete=models.CASCADE,
        verbose_name='transaction type'
    )
    realty_type = models.ForeignKey(
        RealtyType,
        on_delete=models.CASCADE,
        verbose_name='realty type'
    )
    pub_date = models.DateTimeField(
        verbose_name='publication date'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Realty'
        verbose_name_plural = 'Realties'
