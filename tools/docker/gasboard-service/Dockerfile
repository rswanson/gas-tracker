FROM node:16

WORKDIR /app
ADD package.json /app/package.json
RUN npm install
ADD . /app
CMD ["npm", "run", "start"]

# ENV PORT=3333
# EXPOSE ${PORT}
# RUN npm install husky
# RUN npm set-script prepare "husky install"
# RUN npm run prepare
# RUN npm install
# # RUN npm install tslib rxjs axios
# WORKDIR /app/dist
# CMD node .apps/gas-data.webservice/main

