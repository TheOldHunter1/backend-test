FROM node:14
RUN mkdir /ejercicio_4
COPY app.js /ejercicio_4
COPY package.json /ejercicio_4
COPY .env /ejercicio_4
COPY utils /ejercicio_4/utils
COPY responses /ejercicio_4/responses
WORKDIR /ejercicio_4
RUN npm install
EXPOSE 80
CMD node app.js

