from django.urls import path
from . import views

# URLConf....URL configuration
urlpatterns = [
    # path function is used to create a URL pattern object
    path('hello/', views.say_hello)
]