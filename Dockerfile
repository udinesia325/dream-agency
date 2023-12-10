FROM node:18-alpine3.17

WORKDIR /app
COPY package*.json ./
RUN npm install --unsafe-perm

COPY . .

EXPOSE 3000

RUN npm run build

CMD npm start
