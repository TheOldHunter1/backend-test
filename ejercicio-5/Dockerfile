FROM node:14
RUN mkdir /ejercicio_5
COPY app.js /ejercicio_5
COPY package.json /ejercicio_5
WORKDIR /ejercicio_5
RUN npm install
EXPOSE 80
CMD node app.js

