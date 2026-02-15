################################
# Stage 1: Build & Dependencies
################################
# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching layers)
COPY package*.json ./

# Install dependencies (production only to keep image small)
# Note: In real world, we might need devDependencies for tests, 
# but here we assume tests run outside or in a separate stage.
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
