from .models import Post, Category
from rest_framework import serializers
from django.contrib.auth.models import User


class PostSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.name", read_only=True)

    class Meta:
        model = Post
        fields = [
            "title",
            "slug",
            "category",
            "content",
            "snippet",
            "author",
            "image",
            "date_created",
        ]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", "description"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]
