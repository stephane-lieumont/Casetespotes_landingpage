FROM registry.gitlab.com/casetonpote1/backend-users/node-ts:17 as builder

COPY .npmrc .npmrc

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

FROM node:17-alpine as run

WORKDIR /app
COPY --from=builder /app/public /public
COPY --from=builder /app/src /src
COPY --from=builder /app/node_modules /node_modules
COPY --from=builder /app/package.json /package.json

EXPOSE 80

CMD [ "npm", "start" ]


