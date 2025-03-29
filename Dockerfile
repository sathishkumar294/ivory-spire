# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

COPY ivory-spire-gui/package*.json ./

RUN npm install

COPY ivory-spire-gui/. ./

RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
