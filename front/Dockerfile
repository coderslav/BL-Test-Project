FROM node:18

WORKDIR /app/front

ADD package.json /app/front/package.json
ADD package-lock.json /app/front/package-lock.json

RUN npm install

ADD . /app/front/

EXPOSE 3000