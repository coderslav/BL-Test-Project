FROM python:3.9.0

ADD requirements.txt /api/requirements.txt

WORKDIR /api

RUN pip install -r requirements.txt
ENV PYTHONPATH /api
