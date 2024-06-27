FROM python:3.12-slim

WORKDIR /app
RUN apt-get update && apt-get install -y curl && apt-get clean
COPY . /app/
COPY .env.docker /app/.env

RUN pip install -r requirements/prod.txt

CMD python manage.py makemigrations --settings=navos.settings.prod \
    && python manage.py migrate --settings=navos.settings.prod \
    && python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@mail.ru', 'admin')" --settings=navos.settings.prod \
    && python manage.py runserver 0.0.0.0:8000 --settings=navos.settings.prod 

