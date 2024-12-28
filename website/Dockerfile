# Use the official Nginx Alpine image as a base
FROM nginx:alpine

# Copy website files into Nginx's default directory
COPY . /usr/share/nginx/html

# Expose port 80 (default for HTTP)
EXPOSE 80

# Run Nginx in the foreground when the container starts
CMD ["nginx", "-g", "daemon off;"]
