# Build stage: compile the TypeScript sources
FROM node:26.12.1-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Drop dev dependencies so node_modules can be reused as-is in the runtime stage
RUN npm prune --omit=dev

# Runtime stage: only production dependencies and compiled output
FROM node:26.12.1-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production
# Listen on all interfaces so the server is reachable from outside the container
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

# Run as the unprivileged user provided by the node image
USER node

EXPOSE 3000

# WEBHOOK_URL must be provided at runtime, e.g. `docker run -e WEBHOOK_URL=...`
CMD ["node", "dist/src/server.js"]
