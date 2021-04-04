FROM node:14
RUN mkdir /ejercicio_6
COPY app.js /ejercicio_6
COPY package.json /ejercicio_6
WORKDIR /ejercicio_6
RUN npm install
EXPOSE 80
CMD node app.js

