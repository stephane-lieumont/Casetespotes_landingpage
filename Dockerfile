FROM node AS deps

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn --frozen-lockfile

FROM node AS builder

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ARG PUBLIC_URL
ENV PUBLIC_URL ${PUBLIC_URL}

ARG REACT_APP_DEMO
ENV REACT_APP_DEMO ${REACT_APP_DEMO}

RUN if [ "$REACT_APP_DEMO" = "true" ] ; then mv /nginx/nginx.demo.conf /nginx/nginx.conf; fi

RUN yarn build

FROM nginx:alpine as run

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /public /usr/share/nginx/html
COPY --from=builder /nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]