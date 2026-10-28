# Build stage: compile the TypeScript sources
FROM node:26.12.1-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Runtime stage: only production dependencies and compiled output
FROM node:26.12.1-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production
# Listen on all interfaces so the server is reachable from outside the container
ENV HOST=0.0.0.0
ENV PORT=3000

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

# WEBHOOK_URL must be provided at runtime, e.g. `docker run -e WEBHOOK_URL=...`
CMD ["node", "dist/src/server.js"]
