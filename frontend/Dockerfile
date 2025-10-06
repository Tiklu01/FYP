# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port (Next.js default 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
