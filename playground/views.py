from django.shortcuts import render
from django.contrib.contenttypes.models import ContentType


# Create your views here.
def say_hello(request):
   
      
   return render(request, 'hello.html', {'name': 'kenastark','result': list(queryset)})  