FROM node:16-alpine AS deps

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn --frozen-lockfile

FROM node:16-alpine AS builder

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ARG DEMO
ARG PUBLIC_URL
ENV DEMO ${DEMO}
ENV PUBLIC_URL ${PUBLIC_URL}

RUN if [ "$DEMO" = "true" ] ; then mv /nginx/nginx.demo.conf /nginx/nginx.conf; fi

RUN yarn build

FROM nginx:alpine as run

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /public /usr/share/nginx/html
COPY --from=builder /nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]