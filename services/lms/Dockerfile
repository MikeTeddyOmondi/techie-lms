FROM node:18.18.2-alpine

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

COPY . /app

# Ensure node user has ownership of the entire app directory
RUN chown -R node:node /app

# Switch to non-root user
USER node

ENV PORT 8003

EXPOSE $PORT

CMD ["node", "./index.js"]