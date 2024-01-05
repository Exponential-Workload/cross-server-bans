FROM node:current
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN corepack enable
RUN pnpm i
RUN pnpm build
CMD [ "pnpm", "start:prod" ]
