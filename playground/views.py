from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q, F #short for Query
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

   queryset = Product.objects.prefetch_related('promotions').select_related('collection')[:5]
   queryset1 = Customer.objects.filter(email__icontains='.com')[:5]
   queryset2 = Order.objects.select_related('customer').prefetch_related('orderitem_set__product').order_by('-placed_at')[:5]

   return render(request, 'hello.html', {'name': 'kenastark', 'products': list(queryset), 'customers': list(queryset1), 'orders': list(queryset2)}) 