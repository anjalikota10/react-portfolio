FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use a minimal Nginx image to serve the app
FROM nginx:alpine

# Copy built files to Nginx's HTML directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
