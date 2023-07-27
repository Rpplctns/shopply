import json

from django.http import JsonResponse

from shopping_list.models import *


def manage_item(request):
    if request.method == "DELETE":
        Item.objects.get(id=get_data(request, "id")).delete()
        return JsonResponse({"status": "success"})
    if request.method == "POST":
        i = Item(name=get_data(request, "name"), marked=False, list=List.objects.get(id=get_data(request, "list")))
        i.save()
        return JsonResponse({"status": "success", "payload": {"id": i.id}})


def manage_list(request):
    if request.method == "PUT":
        l = List.objects.get(id=get_data(request, "list"))
        l.title = get_data(request, "title")
        l.save()
        return JsonResponse({"status": "success"})


def get_data(request, key):
    return json.loads(request.body.decode("utf-8"))[key]
