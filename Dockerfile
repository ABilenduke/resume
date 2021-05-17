FROM node:lts-alpine3.10

ENV APP_ROOT /src/nuxt/app

RUN mkdir -p ${APP_ROOT}
RUN mkdir -p ${APP_ROOT}/node_modules
WORKDIR ${APP_ROOT}

COPY package.json ${APP_ROOT}
COPY *yarn.lock ${APP_ROOT}

RUN yarn
RUN yarn generate

COPY . ${APP_ROOT}

EXPOSE 3333