FROM node:18.6.0-slim As BUILDER

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY src ./src

FROM node:18.6.0-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app ./

EXPOSE 3000

CMD ["npm", "start"]