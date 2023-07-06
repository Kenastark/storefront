from django.shortcuts import render
from django.db import connection
from store.models import *


# Create your views here.
def say_hello(request):

   queryset = Product.objects.raw('SELECT id, title FROM store_product')

   return render(request, 'hello.html', {'name': 'kenastark', 'result': list(queryset)})  