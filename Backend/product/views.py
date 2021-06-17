from django.shortcuts import render
 
# Elementos necesarios para que el API REST funcione 
from rest_framework import viewsets
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
 
# Clase 'JugosSerializer' 
from product.serializers import ProductSerializer, CategorySerializer
 
# Modelo 'Jugos' 
from product.models import Product, Category
 
# Create your views here.
 
class ProductViewSet(viewsets.ModelViewSet):    
    
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):    
    
    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer
