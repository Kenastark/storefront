from django.shortcuts import render
from django.db.models import Value, F, Func, Count
from store.models import Product, Customer


# Create your views here.
def say_hello(request):
 
   queryset = Customer.objects.annotate(
      orders_count=Count('order')

   )
   return render(request, 'hello.html', {'name': 'kenastark','result': list(queryset)})  