from django.shortcuts import render
from django.contrib.contenttypes.models import ContentType
from store.models import *
from tags.models import TaggedItem

# Create your views here.
def say_hello(request):
  
   # collection = Collection.objects.get(pk=14)
   # collection.featured_product = None
   # collection.save()
   
   Collection.objects.filter(pk=15).update(featured_product=None)

   #alternative to the four lines above
   #collection = Collection.objects.create(name='a', featured_product_id=1)
   #collection.id

   return render(request, 'hello.html', {'name': 'kenastark',})  