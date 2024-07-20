# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /apps/scheduler-ui

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:stable-alpine

# Copy the built files from the previous stage
COPY --from=0 /apps/scheduler-ui/dist /usr/share/nginx/html

# Expose the port on which the web server will run
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
