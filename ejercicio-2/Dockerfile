FROM node:14
RUN mkdir /ejercicio_3
COPY app.js /ejercicio_2
COPY package.json /ejercicio_2
COPY .env /ejercicio_2
COPY .gitignore /ejercicio_2
COPY controllers /ejercicio_2/controllers
COPY libs /ejercicio_2/libs
COPY models /ejercicio_2/models
COPY routes /ejercicio_2/routes
WORKDIR /ejercicio_2
RUN npm install
EXPOSE 80
CMD node app.js
