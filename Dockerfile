# Production build of the app, served by Nitro's Node server.
#
#   docker compose up --build        (see compose.yaml)
#
# The deploy target is still Vercel. NITRO_PRESET=node-server swaps the build
# output for a standalone server in .output/ (see vite.config.ts).

FROM node:22-bookworm-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

COPY . .
# `npm run build` is the repo's build: vite build, then `db:migrate`, which
# skips itself when DATABASE_URL is unset.
ENV NITRO_PRESET=node-server
RUN npm run build

FROM node:22-bookworm-slim AS runtime
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=8080
WORKDIR /app

# .output is self-contained: the server bundle, its few traced node_modules,
# and the static files from public/.
COPY --from=build --chown=node:node /app/.output ./

USER node
EXPOSE 8080

HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:' + process.env.PORT + '/').then((r) => process.exit(r.ok ? 0 : 1), () => process.exit(1))"]

CMD ["node", "server/index.mjs"]
