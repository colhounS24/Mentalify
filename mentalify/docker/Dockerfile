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
ARG PUBLIC_URL
ENV VITE_APP_API_URL=${PUBLIC_URL}/api
RUN npm run build -- --base=${PUBLIC_URL}

# prodtest server
FROM nginx:stable-alpine AS prodtest
ARG PUBLIC_URL
COPY --from=builder /app/dist /usr/share/nginx/html${PUBLIC_URL}
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
# dynamically generate index.html
COPY <<EOF /usr/share/nginx/html/index.html
<html>
<body>
    <a href="${PUBLIC_URL}/">${PUBLIC_URL}</a>
</body>
</head>
</html>
EOF
