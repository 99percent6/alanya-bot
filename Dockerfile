FROM node:11-alpine

WORKDIR /api
COPY . .
RUN apk add git python make g++ && \
    yarn install --frozen-lockfile && yarn build && rm -rf node_modules && yarn install --frozen-lockfile --production=true

EXPOSE 8081

CMD [ "yarn", "start" ]
