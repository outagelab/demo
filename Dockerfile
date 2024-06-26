FROM node:20-alpine3.19
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build

CMD ["node", "server/index.js"]
