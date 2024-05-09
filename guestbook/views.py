from django.shortcuts import render
from django.http import JsonResponse # 추가 
from django.shortcuts import get_object_or_404 # 추가
from django.views.decorators.http import require_http_methods
from .models import GuestBook
import json
from .serializer import GuestBookserializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.views import status
from rest_framework import status
from django.http import Http404

#Password 다 숨겨야 함. 

# Create your views here.
class GuestBookList(APIView):
    def post(self,request, format=None):
        serializer = GuestBookserializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, format=None):
        guestbook=GuestBook.objects.order_by('-created_at')
        serializers=GuestBookserializer(guestbook, many=True)
        return Response(serializers.data)
    

class GuestBookDetail(APIView):  # 목록으로 불러오기 
    def get(self, request, id):
        guestbook= get_object_or_404(GuestBook, id=id)
        serializer=GuestBookserializer(guestbook)
        return Response(serializer.data)
    
    def delete(self, request, id):
        guestbook=get_object_or_404(GuestBook, id=id)
        password=request.data.get('password')
        if password and guestbook.password == password:
            guestbook.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({'error': 'Invalid password'}, status=status.HTTP_400_BAD_REQUEST)