# Stage 1
FROM node:alpine as ionic-build
RUN npm install -g ionic
WORKDIR /app
COPY . ./
RUN ionic build --prod

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=ionic-build /app/www /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
