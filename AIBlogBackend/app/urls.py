from django.urls import path
from .views import PostList, PostDetail, CategoryList


urlpatterns = [
    path("posts/", PostList.as_view(), name="post-list"),
    path("posts/<str:slug>/", PostDetail.as_view(), name="post-detail"),
]
