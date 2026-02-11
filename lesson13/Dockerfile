# 1. THE BASE: Start with a lightweight version of Node.js (Linux + Node pre-installed)
FROM node:18-alpine

# 2. THE WORKSPACE: Set the folder inside the container where we will work
WORKDIR /app

# 3. THE PREP: Copy the package.json file first (better for caching)
COPY package.json .

# 4. THE BUILD: Run the command to install dependencies inside the image
RUN npm install

# 5. THE CODE: Copy the rest of your app's source code into the container
COPY . .

# 6. THE PORT: Tell Docker this container listens on port 3000
EXPOSE 3000

# 7. THE START: The command to run when the container starts
CMD ["node", "server.js"]
