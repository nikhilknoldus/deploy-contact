FROM node:10

COPY ./frontend/xt-app/package*.json ./

RUN npm init -y
RUN npm install

COPY . .

CMD ["npm", "start"]
