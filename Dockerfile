FROM node:18-alpine

WORKDIR /app

RUN npm install -g npm@11.2.0

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]