# Base image
FROM node:18-alpine as build

WORKDIR /app

COPY . .

RUN npm i -g pnpm 

RUN pnpm i

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]