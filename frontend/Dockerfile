FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# The second path is obtained from nginx docs
COPY --from=builder /app/build /usr/share/nginx/html

# We dont have to specify the startup command , because the default startup command of nginx image
# will start the nginx server