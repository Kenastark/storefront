from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from store.models import *


# Create your views here.
def say_hello(request):
   #keyword=value
   #queryset = Product.objects.filter(unit_price__range=(20, 30))

   #filtering across relationship
   #queryset = Product.objects.filter(collection__id__range=(1,2,3))

   #filtering with strings
   #queryset = Product.objects.filter(title__endswith='ed')

   #for dates
   #queryset = Product.objects.filter(description__isnull=True)

   queryset = Product.objects.filter(inventory__lt=10)
   queryset1 = Customer.objects.filter(email__icontains='.com')
   queryset2 = Order.objects.filter(customer_id=1)

   return render(request, 'hello.html', {'name': 'kenastark', 'products': list(queryset), 'customers': list(queryset1), 'orders': list(queryset2)}) 