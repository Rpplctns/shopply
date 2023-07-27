# shopply
Shopply is a web application that is very simple.
Users can create shopping lists as well as join existing
ones, and manage them. The goal of the project is to 
make a program that helps with shopping, providing users
with a functionality to keep shopping list online, and
manage them using dedicated software, specially designed
for shopping list.
## How to run
You need to meet the following prerequisites:
 - have python 3 installed,
 - have django library installed,
 - have some python IDE, like pycharm or vscode (recommended).

To run the program:
 - First open the file `settings.py` and set the `TIME_ZONE` variable
for your timezone. You should find the variable in the line 110.
 - Open project in terminal and run following commands

```
python manage.py makemigrations shopping_list
python manage.py migrate
python manage.py runserver
```
 - You should now be able to find working application by
opening `http://localhost:8000/` in your browser.

For more information I recommend to visit the django site.