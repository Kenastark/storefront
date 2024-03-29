from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
# Create your models here.\

class TaggedItemManager(models.Manager):
    def get_tags_for(self, obj_type, obj_id):
        content_type = ContentType.objects.get_for_model(obj_type)

        return TaggedItem.objects \
        .select_related('tag')\
        .filter(
            content_type=content_type,
            object_id=obj_id
        )
class Tag(models.Model):
    label = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.label

class TaggedItem(models.Model):
    objects = TaggedItemManager()
    # What tag applied to what object
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
# Type (product, video, article)...we can find the table
# ID....we cna find the record
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField() #ID of that target object
    content_object = GenericForeignKey() #to get the actual product that this tag is applied to
    