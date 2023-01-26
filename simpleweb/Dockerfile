FROM node:14-alpine

#if the folder doesnot exist, it will be created
WORKDIR /usr/app

#now the second path is relative to the WORKDIR
COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm","start"]