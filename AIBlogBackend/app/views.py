from django.shortcuts import render
from rest_framework import generics
from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    # TO DO: do some form of pagination here probably using categories or PageNumberPagination


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
