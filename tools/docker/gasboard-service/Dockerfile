FROM node:16

WORKDIR /app
COPY package*.json ./
COPY dist .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
RUN npm install tslib rxjs axios
WORKDIR /app/dist
CMD node ./main.js

