FROM node:18.18.2-alpine AS build
WORKDIR /app
COPY . .
RUN npm i --silent
RUN npm run build

FROM lipanski/docker-static-website:2.4.0 AS release
COPY --from=build /app/dist .
COPY --from=build /app/httpd.conf .
CMD ["/busybox-httpd", "-f", "-v", "-p", "3000", "-c", "httpd.conf"]

