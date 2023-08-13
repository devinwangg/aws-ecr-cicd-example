# 使用 Node.js 官方映像作為基本映像
FROM node:20-alpine
LABEL maintainer="Devin once9125@gmail.com"

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

ENV PORT=80
EXPOSE 80

CMD ["node", "server.js"]