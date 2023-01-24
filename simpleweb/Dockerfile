FROM node:14-alpine

#copy everything from build context to current working diretory inside the container
COPY ./ ./
RUN npm install

CMD ["npm","start"]