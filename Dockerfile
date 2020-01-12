FROM node:10

COPY ./package*.json ./

RUN npm update

COPY . .

CMD ["npm", "start"]
