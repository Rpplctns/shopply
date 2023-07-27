from django.contrib import admin
from django.urls import path
from shopping_list import views, controllers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.main, name="home"),

    path('list/', views.open_list, name="open"),
    path('list/<int:list_id>/', views.shopping_list, name="list"),

    path('newlist/', views.create_list, name="create_list"),
    path('deletelist/<int:list_id>/', views.delete_list, name="delete_list"),

    path('api/item/', controllers.manage_item, name="item_management"),
    path('api/list/', controllers.manage_list, name="list_management")
]
