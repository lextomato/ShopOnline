from django.contrib import admin
from django.urls import include, path

# Importamos Django REST Framework y la vista 'jugos' 
from rest_framework import routers
from product import views

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'categories', views.CategoryViewSet)
 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
