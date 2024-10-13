from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateAPIView,RetrieveDestroyAPIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from rest_framework.viewsets import ModelViewSet

from .models import *
from .serializers import ProductSerializer,StudentSerializer
from .forms import UserCreationForm,StudentForm

from rest_framework.authentication import BasicAuthentication,SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated,IsAdminUser,AllowAny,IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.authentication import JWTAuthentication


class Studentsignup(APIView):
    permission_classes = [AllowAny]
    def post(self,request):
        user_data   = request.data['user']

        stu_data    = {"name"           :request.data['name'],
                       "mobile_number"  :request.data['Mobile_number'],
                       "course"         :request.data['course'],
                       "fees"           :request.data['fees']
                       }
        
        print(user_data)
        print(stu_data)

        user_form = UserCreationForm(user_data)
        if user_form.is_valid():
            #--------------------User---------------------
            new_user    = user_form.save(commit=False)
            new_user.set_password(user_data['password'])
            new_user.save()

            #-------------------Student------------------

            new_student=Student(user            = new_user,
                                Name            = stu_data['name'],
                                Mobile_Number   = stu_data['mobile_number'],
                                Course          = stu_data['course'],
                                fees            = stu_data['fees']
                                )
            
            new_student.save()
            return Response("Data Saved")

# from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter,OrderingFilter


class productdetails(ModelViewSet):
    # authentication_classes = [TokenAuthentication]

    # authentication_classes  = [BasicAuthentication]
    permission_classes      = [AllowAny]

    queryset         = Product.objects.all()
    serializer_class = ProductSerializer

    # filter_backends = [SearchFilter,DjangoFilterBackend,OrderingFilter]
    search_fields   = ['Brand_Name','Price']
    filterset_fields= ['Price','Brand_Name']
    Ordering_fields = ["Price",'Brand_Name']

class studentlistview(ModelViewSet):
    permission_classes =[AllowAny]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer