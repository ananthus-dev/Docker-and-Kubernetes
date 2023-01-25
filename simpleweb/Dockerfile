FROM node:14-alpine

#if the folder doesnot exist, it will be created
WORKDIR /usr/app

#now the second path is relative to the WORKDIR
COPY ./ ./
RUN npm install

CMD ["npm","start"]