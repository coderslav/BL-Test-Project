# Generated by Django 3.1.2 on 2022-05-09 10:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0007_auto_20220509_1055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='realty',
            name='pub_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='publication date'),
        ),
    ]
