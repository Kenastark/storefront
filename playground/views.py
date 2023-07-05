from django.shortcuts import render
from django.contrib.contenttypes.models import ContentType
from store.models import *
from tags.models import TaggedItem

# Create your views here.
def say_hello(request):
  
   # collection = Collection(pk=14)
   # collection.title = 'Games'
   # collection.save()

   #Collection.objects.filter(pk=15).update(featured_product=None)

   #code to change the id in the collection table
   #Collection.objects.filter(pk=15).update(id=12)

   #to delete multiple objects

   Collection.objects.filter(id__gt=10).delete()
   
   #alternative to the four lines above
   #collection = Collection.objects.create(name='a', featured_product_id=1)
   #collection.id

   return render(request, 'hello.html', {'name': 'kenastark'})  