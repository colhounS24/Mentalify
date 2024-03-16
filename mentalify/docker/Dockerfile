FROM node:21-slim AS base
ENTRYPOINT ["/usr/local/bin/npm"]

# install dependencies
FROM base AS deps
WORKDIR /app
ADD package*.json .
RUN npm install

# dev server
FROM base AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5173
CMD ["run", "dev", "--", "--host"]

# builder, required for the prodtest target
FROM dev AS builder
ARG API_URI
ARG PUBLIC_URL
# ENV REACT_APP_API_URI=$API_URI
RUN npm run build -- --base=${PUBLIC_URL}

# prodtest server
FROM nginx:stable-alpine AS prodtest
ARG PUBLIC_URL
COPY --from=builder /app/dist /usr/share/nginx/html${PUBLIC_URL}
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
