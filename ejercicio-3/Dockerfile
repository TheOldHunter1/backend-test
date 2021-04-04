FROM node:14
RUN mkdir /ejercicio_3
COPY app.js /ejercicio_3
COPY package.json /ejercicio_3
WORKDIR /ejercicio_3
RUN npm install
EXPOSE 80
CMD node app.js

