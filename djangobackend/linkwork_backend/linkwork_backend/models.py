from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    dob = models.DateField()
    course_of_study = models.CharField(max_length=100)
    password = models.CharField()
    # Add more fields as per your requirement