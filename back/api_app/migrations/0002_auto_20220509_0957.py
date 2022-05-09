# Generated by Django 3.1.2 on 2022-05-09 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='realty',
            name='title',
            field=models.CharField(max_length=250, unique=True, verbose_name='realty name'),
        ),
        migrations.AlterField(
            model_name='realtytype',
            name='title',
            field=models.CharField(max_length=250, unique=True, verbose_name='name of realty type'),
        ),
        migrations.AlterField(
            model_name='transactiontype',
            name='title',
            field=models.CharField(max_length=250, unique=True, verbose_name='name of transaction type'),
        ),
    ]
