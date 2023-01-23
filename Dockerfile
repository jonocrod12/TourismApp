FROM node:16

WORKDIR /app

COPY ..

RUN npm install

RUN npm install -g @angular/cli

RUN ng-build --configuration=staging 

RUN ng-biuld -prod

FROM nginx=alpine

COPY - -from-node/app/dist/angular-docker-deployment/usr/share/nginx/html
COPY --from-node/app/.docker/nginx.conf /etc/nginx/conf .d/default.conf

