# base image
FROM node:lts AS base
LABEL maintainer="tienld@gmail.com"

# install packages
FROM base AS packages

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

# build resources
FROM base AS builder

WORKDIR /app

COPY --from=packages /app .
COPY . .

RUN yarn build

# production stage
FROM base AS production

# global runtime packages
RUN yarn cache clean

WORKDIR /app

COPY --from=builder /app/dist ./dist


FROM nginx:latest
EXPOSE 3000
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/docker/nginx/default.conf /etc/nginx/conf.d/default.conf
