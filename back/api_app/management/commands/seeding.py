from django.core.management import call_command
from django.core.management.base import BaseCommand

from api_app.models import TransactionType, RealtyType, Realty

class Command(BaseCommand):

    def handle(self, *args, **options):
        if not Realty.objects.exists() and not RealtyType.objects.exists() and not TransactionType.objects.exists():
            self.stdout.write('Seeding initial data to the database')
            call_command('loaddata', 'seed/init_db_seed.json')
        else:
            self.stdout.write('The initial data already exists in the database')
