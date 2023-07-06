from django.shortcuts import render
from django.db import connection
from store.models import *


# Create your views here.
def say_hello(request):

   cursor = connection.cursor()
   cursor.execute('SELECT * FROM store_product')
   cursor.close()

   return render(request, 'hello.html', {'name': 'kenastark', 'result': list(queryset)})  