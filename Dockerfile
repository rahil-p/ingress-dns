FROM node:16.13.2-alpine

WORKDIR /var/app

COPY package.json yarn.lock ./
COPY src ./src/

RUN yarn install --production --frozen-lockfile

CMD ["node", "src/index.js"]
