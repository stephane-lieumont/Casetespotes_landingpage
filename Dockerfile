FROM registry.gitlab.com/casetonpote1/backend-users/node-ts:17 as builder

COPY .npmrc .npmrc

WORKDIR /app

COPY . /app/

RUN npm i
RUN npm run build

FROM node:17-alpine as run

WORKDIR /app
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

CMD [ "npm", "start" ]


