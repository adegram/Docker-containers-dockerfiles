FROM node:24-alpine
#uses nodejs 24 alpine base-image

ENV NODE_ENV=production PORT=3000
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force && addgroup -S app && adduser -S app -G app
COPY --chown=app:app server.js ./
USER app
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD node -e "fetch('http://127.0.0.1:3000/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "server.js"]
