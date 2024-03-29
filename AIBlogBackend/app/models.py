from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    AUTHORS = [("admin", "admin"), ("Rukevwe Omoro", "Ruk")]
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_DEFAULT, default="AI", null=True
    )
    content = models.TextField()
    snippet = models.CharField(max_length=100, blank=True, null=True)
    author = models.CharField(max_length=50, choices=AUTHORS, default="admin")
    image = models.ImageField(upload_to="images/", blank=True, null=True)
    image_alt_text = models.CharField(max_length=50, blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # Generate a slug from the first three words of the title if not specified
        if not self.slug:
            self.slug = slugify(" ".join(self.title.split()[:3]))
        super().save(*args, **kwargs)

    class Meta:
        unique_together = ("title", "slug")


class Comment(models.Model):
    author = models.CharField(max_length=50)
    content = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    upvotes = models.IntegerField(default=0)
    replies = models.ManyToManyField("self", blank=True, symmetrical=False)
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author} on {self.post}"
