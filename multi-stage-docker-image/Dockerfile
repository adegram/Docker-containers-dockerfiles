#Stage 1: First Build stage
FROM node:24-alpine AS runtime-deps
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

#Stage 2: Runtime for production
FROM node:24-alpine AS runtime
ENV NODE_ENV=production PORT=8080
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app
COPY --from=runtime-deps --chown=app:app /app/node_modules ./node_modules
COPY --chown=app:app package.json server.js ./
USER app
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD node -e "fetch('http://127.0.0.1:8080/healthz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "server.js"]
