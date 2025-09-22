# Use official Node.js runtime
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy app source
COPY . .

EXPOSE 8080
CMD ["node", "index.js"]

