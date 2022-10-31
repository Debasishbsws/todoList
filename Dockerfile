FROM node:16
WORKDIR /usr/src/app

ENV PORT=3000

COPY package*.json ./

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "devlopement" ]; then npm install; else npm ci --only=production; fi

COPY . .

EXPOSE ${PORT}

CMD ["node", "app.js"]