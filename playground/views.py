from django.shortcuts import render
from django.db import connection
from store.models import *


# Create your views here.
def say_hello(request):

   with connection.cursor() as cursor:
      cursor.execute('SELECT id, placed_at FROM store_order')

   return render(request, 'hello.html', {'name': 'kenastark'})  