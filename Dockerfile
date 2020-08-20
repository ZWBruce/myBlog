
FROM node:latest

RUN mkdir -p /usr/local/my-blog

WORKDIR /usr/local/my-blog

COPY ./package.json ./

RUN npm set registry http://registry.npm.taobao.org && npm install

COPY ./ ./

CMD ["npm","run","serve"]