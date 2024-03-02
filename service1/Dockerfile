# Use the official Go image as the base image
FROM golang:latest AS go-builder

# Set the working directory to the Go service code
WORKDIR /service1

# Copy the Go service code into the container
COPY service1/ .

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux go build -o go-app

# Start a new stage with a minimal base image
FROM alpine:latest

# Set the working directory to /app
WORKDIR /app

# Copy the compiled Go binary from the previous stage
COPY --from=go-builder /service1/go-app .

# Expose the port the application will run on
EXPOSE 8080

# Command to run the executable
CMD ["./go-app"]
