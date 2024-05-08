from django.urls import path
from guest_book.views import *

urlpatterns= [
    path('<int:id>', guestbook ,name='guest_book')
]