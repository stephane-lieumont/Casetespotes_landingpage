FROM registry.gitlab.com/casetonpote1/backend-users/node-ts:17 as builder

COPY .npmrc .npmrc

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

FROM nginx:1.21.0-alpine as production

ENV NODE_ENV production

WORKDIR /app
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]


