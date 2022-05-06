FROM python:3.9.0

WORKDIR /app/back

ADD requirements.txt /api/requirements.txt

RUN pip install -r requirements.txt

ADD . /app/back/

ENV PYTHONPATH /app/back

EXPOSE 8000