# Stage 1: The Builder (Compiling/Installing)
# We use a larger image to install things, then discard it.
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install --production

# Stage 2: The Runner (Production)
# We start fresh with a tiny image and only copy what we need.
FROM node:18-alpine
WORKDIR /app

# Copy only the installed node_modules from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Best Practice: Don't run as root user!
USER node

EXPOSE 3000
CMD ["node", "app.js"]
