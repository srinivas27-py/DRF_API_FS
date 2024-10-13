from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    Brand_Name = models.CharField(max_length=200,null=True)
    Model_Name = models.CharField(max_length=200,null=True)
    Price      = models.IntegerField(default=0)

    def __str__(self):
        return self.Brand_Name + " " + self.Model_Name
    
class Student(models.Model):

    user = models.OneToOneField(User,on_delete=models.CASCADE,null=True)

    Name = models.CharField(max_length=200,null=True)
    
    Mobile_Number = models.CharField(max_length=200,null=True)
    
    Course=models.CharField(max_length=200,null=True)
    
    fees=models.IntegerField(default=0)

    def __str__(self):
        return self.Name 
    