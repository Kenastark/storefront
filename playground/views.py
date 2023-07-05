from django.shortcuts import render
from django.contrib.contenttypes.models import ContentType
from store.models import *
from tags.models import TaggedItem

# Create your views here.
def say_hello(request):
  
   collection = Collection()
   collection.title = 'Video Games'
   collection.featured_product = Product(pk=1) #first method
   collection.save()
   

   #alternative to the four lines above
   #collection = Collection.objects.create(name='a', featured_product_id=1)
   #collection.id

   return render(request, 'hello.html', {'name': 'kenastark',})  