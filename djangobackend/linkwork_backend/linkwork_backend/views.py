from django.shortcuts import render
from .models import User
from django.http import HttpRequest
from django.http import HttpResponse

def registery(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        dob = request.POST['dob']
        course_of_study = request.POST['course_of_study']
        password = request.POST['password']
        # Extract other form fields as required

        # Create a new User instance
        user = User(username=username, email=email)
        user.save()

        # Optionally, perform additional actions or redirect to a success page

    return render(request, 'register.html')
