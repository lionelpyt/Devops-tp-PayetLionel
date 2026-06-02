# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /app

COPY tp-wik-dps-01/package.json ./
COPY tp-wik-dps-01/package-lock.json ./
COPY tp-wik-dps-01/stats.json ./

RUN npm ci --only=production

COPY tp-wik-dps-01/server.js ./

# Stage 2: Run
FROM node:24-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/server.js ./
COPY --from=builder /app/stats.json ./

RUN chown -R node:node /app

EXPOSE 3000

USER node
CMD ["npm", "start"]
