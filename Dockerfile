FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY vite.config.js ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm","run","dev" ]