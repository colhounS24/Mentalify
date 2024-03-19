FROM node:alpine AS base
WORKDIR /app

# install dependencies
FROM base AS deps
COPY package*.json .
RUN npm install

# dev server
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5000
CMD ["npm", "start"]

# prod server
FROM dev AS prod
CMD ["node", "server.js"]
