FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY /src/App.js .
ENV NODE_OPTIONS=--experimental-modules
CMD ["node","App.js"]
