from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import get_object_or_404
from django.template import loader
from django.utils import timezone
from django.urls import reverse

from shopping_list.models import *


def main(request):
    template = loader.get_template("shopping_list/main.html")
    return HttpResponse(template.render({"error_message": ""}, request))


def shopping_list(request, list_id):
    template = loader.get_template("shopping_list/list.html")
    return HttpResponse(template.render({"list": get_object_or_404(List, pk=list_id)}, request))


def create_list(request):
    new_list = List(title="New List", created_date=timezone.datetime.now())
    new_list.save()
    return HttpResponseRedirect(reverse("list", args=(new_list.id,)))


def delete_list(request, list_id):
    List.objects.get(id=list_id).delete()
    return HttpResponseRedirect(reverse("home", args=()))


def open_list(request):
    list_id = request.POST["list_id"]
    if list_id == "" or not list_id[1:].isdigit() or not List.objects.filter(id=list_id).exists():
        template = loader.get_template("shopping_list/main.html")
        return HttpResponse(
            template.render({"error_message": "there is no list with that passcode: \"" + str(list_id) + "\""}, request)
        )
    return HttpResponseRedirect(reverse("list", args=(list_id,)))
