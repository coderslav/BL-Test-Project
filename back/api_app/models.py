from django.db import models

# Create your models here.

class TransactionType(models.Model):
    title = models.CharField(
        max_length=250,
        verbose_name='name of transaction type'
        )

    def __str__(self):
        return self.title

class RealtyType(models.Model):
    title = models.CharField(
        max_length=250,
        verbose_name='name of realty type'
        )
    
    def __str__(self):
        return self.title
        
class Realty(models.Model):
    title = models.CharField(
        max_length=250,
        verbose_name='realty name'
    )
    address = models.TextField(
        verbose_name='realty location'
    )
    transaction = models.ForeignKey(
        TransactionType,
        on_delete=models.CASCADE,
        verbose_name='transaction type'
    )
    realty_type = models.ForeignKey(
        RealtyType,
        on_delete=models.CASCADE,
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
