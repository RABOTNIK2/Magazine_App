from celery import shared_task
from .models import *

@shared_task
def create_rating(query):
    prod = Product.objects.get(pk=query)
    review_filter = Review.objects.filter(product=query)
    review_list = list(review_filter)
    arithmetic_mean = 0
    for i in review_list:
        arithmetic_mean += i.rating
    review_mean = round(arithmetic_mean/int(len(review_list)))
    prod.rating = review_mean
    prod.save()

    # {
    #     "id": 1,
    #     "content_review": "retthtrhthrth",
    #     "date": "2024-06-27T08:16:59Z",
    #     "rating": 3,
    #     "author": 1,
    #     "product": 1
    # }