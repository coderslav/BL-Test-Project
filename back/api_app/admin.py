from django.contrib import admin
from .models import TransactionType, RealtyType, Realty

# Register your models here.
admin.site.register(TransactionType)
admin.site.register(RealtyType)
admin.site.register(Realty)
