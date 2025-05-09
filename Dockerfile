# Install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Install only production dependencies
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy production node_modules and built app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
