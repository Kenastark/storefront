from django.shortcuts import render
from django.contrib.contenttypes.models import ContentType
from store.models import Product
from tags.models import TaggedItem

# Create your views here.
def say_hello(request):
  
   queryset = Product.objects.all()
   queryset[0]
   list(queryset)
      
   return render(request, 'hello.html', {'name': 'kenastark','tags': list(queryset)})  