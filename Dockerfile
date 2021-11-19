FROM node:14.15.0 as builder
WORKDIR /csc-tools-app
ENV PATH /csc-tools-app/node_modules/.bin:$PATH
COPY package.json /csc-tools-app/
COPY yarn.lock  /csc-tools-app/

RUN npm install
COPY . /csc-tools-app
RUN npm build

FROM nginx:1.16.0-alpine
RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf
COPY .nginx-custom.conf /etc/nginx/conf.d/nginx-custom.conf
COPY --from=builder /csc-tools-app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
