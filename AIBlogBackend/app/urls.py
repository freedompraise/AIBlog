from django.urls import path
from .views import PostList, PostDetail, CategoryList


urlpatterns = [
    path("posts/", PostList.as_view(), name="post-list"),
    path("posts/<int:pk>/", PostDetail.as_view(), name="post-detail"),
    path("categories/", CategoryList.as_view(), name="category-list"),
]
