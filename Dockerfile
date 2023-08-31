FROM node:alpine as react-build

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn --frozen-lockfile

FROM node:alpine AS builder


COPY --from=react-build /app/node_modules ./node_modules
COPY . .

ARG PUBLIC_URL
ARG REACT_APP_DEMO

ENV PUBLIC_URL ${PUBLIC_URL}
ENV REACT_APP_DEMO ${REACT_APP_DEMO}

RUN yarn build

FROM nginx:alpine as run

ENV NODE_ENV production

COPY --from=builder /build /usr/share/nginx/html
COPY --from=builder /nginx/nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]