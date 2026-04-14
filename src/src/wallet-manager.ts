FROM node:20-slim
WORKDIR /app
COPY package*.json package-lock.json ./
RUN npm ci
COPY src/ ./src/
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "node_modules/.bin/tsx", "src/run-render.ts"]

const WALLET_FILE = 
  existsSync("./WALLET_DATA") ? path.resolve("./WALLET_DATA") :
  existsSync("/etc/secrets/WALLET_DATA") ? "/etc/secrets/WALLET_DATA" :
  path.resolve(__dirname, "../data/wallets.enc.json");
