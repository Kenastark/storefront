from django.shortcuts import render
from django.db.models.aggregates import Count, Max, Min, Avg, Sum
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

   #queryset = Product.objects.filter(title__endswith="ed")
 
  # queryset1 = Customer.objects.filter(email__icontains='.com')[:5]
   #queryset2 = Order.objects.select_related('customer').prefetch_related('orderitem_set__product').order_by('-placed_at')[:5]


   result = Product.objects.filter(collection__id=1).aggregate(count=Count('id'), min_price=Min('unit_price'))

   return render(request, 'hello.html', {'name': 'kenastark','result':result}) 