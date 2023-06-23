from django.db import models

from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey


# Create your models here.
class LikedItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # for identifying the type of an object that the user likes
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    # for referencing that particular object
    object_id = models.PositiveSmallIntegerField()
    # for reading an actual object
    content_object = GenericForeignKey()
