from django.shortcuts import render
from django.db.models import Value, F, Func
from django.db.models import Concat 
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


   # result = Product.objects.aggregate(count=Count('id'), min_price=Min('unit_price'))
   # result1 = Order.objects.aggregate(count=Count('id'))
   # result2 = OrderItem.objects.filter(product__id=1).aggregate(unit_sold=Sum('quantity'))
   # result3 = Order.objects \
   #    .filter(customer__id=1) \
   #    .aggregate(count=Count('id'))
   
   # result4 = Product.objects.filter(collection__id=3) \
   #    .aggregate(
   #       min_price=Min('unit_price'),
   #       max_price=Max('unit_price'),
   #       avg_price=Avg('unit_price'))

   #CONCAT
   queryset = Customer.objects.annotate(
         full_name = Func(F('first_name'), Value(' '), 
                          F('last_name'), function='CONCAT')
   )

   # SHorter method
   queryset = Customer.objects.annotate(
         full_name = Concat('first_name', Value(' '), 'last_name') #the space is wrapped in a values object so django doesnot think it is a column in our table
   )
   return render(request, 'hello.html', {'name': 'kenastark','result': list(queryset)})  