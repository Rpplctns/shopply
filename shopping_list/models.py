from django.db import models


class List(models.Model):
    title = models.CharField(max_length=20)
    created_date = models.DateField()

    def __str__(self):
        return self.title + " (#" + str(self.id) + ")"


class Item(models.Model):
    name = models.CharField(max_length=20)
    marked = models.BooleanField()
    list = models.ForeignKey(List, on_delete=models.CASCADE)

    def __str__(self):
        return self.name + " (#" + str(self.id) + ")"

