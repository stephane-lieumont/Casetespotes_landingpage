FROM registry.gitlab.com/casetonpote1/ctp-utils/node-ts:17 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/
COPY ./package-lock.json /app/

RUN npm i

COPY . /app

RUN npm run build

FROM nginx:1.22.0-alpine as run

COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]