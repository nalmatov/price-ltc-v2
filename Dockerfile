FROM node:20.19.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install npm@11.2.0
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]