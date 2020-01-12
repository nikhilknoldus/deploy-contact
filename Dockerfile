FROM node:10

COPY ./package*.json ./

RUN npm init -y
RUN npm install

COPY . .

CMD ["npm", "start"]
