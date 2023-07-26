FROM node:16-alpine AS deps

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/
COPY ./yarn.lock /app/

RUN yarn --frozen-lockfile

FROM node:16-alpine AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG DEMO
ENV DEMO ${DEMO}

ARG PUBLIC_URL
ENV PUBLIC_URL ${PUBLIC_URL}

RUN if [ "$DEMO" = "true" ] ; then mv /nginx/nginx.demo.conf /nginx/nginx.conf; fi

RUN yarn build

FROM nginx:1.22.0-alpine as run

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /nginx/nginx.conf /etc/nginx/conf.d
COPY --from=builder /public /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]