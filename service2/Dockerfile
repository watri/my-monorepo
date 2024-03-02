# Use the official Node.js image as the base image
FROM node:16 AS node-builder

# Set the working directory to the Node.js service code
WORKDIR /service2

# Copy the Node.js service code into the container
COPY service2 .

# Install Node.js dependencies
RUN npm install

# Start a new stage with a minimal base image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy the Node.js application code and dependencies from the previous stage
COPY --from=node-builder /service2 .

# Expose the port the application will run on
EXPOSE 3000

# Command to run the Node.js application
CMD ["node", "server.js"]
