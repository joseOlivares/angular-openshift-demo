### STAGE 1: Build the angular App ###
FROM node:lts-alpine AS build
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Run a clean instalation of the dependencies
RUN npm ci
# install angular cli
RUN npm install -g @angular/cli
# Copy all files
COPY . .
# Build the Angular application
RUN npm run build --configuration=production


### STAGE 2: We use Nginx to serve the Angular app ###
#FROM nginx:latest
#Usamos la version sin privilegios porque es la que  funciona en openshift
FROM nginxinc/nginx-unprivileged:stable-alpine

# Copy the nginx configuration to replace the default nginx contents
COPY nginx.conf /etc/nginx/conf.d/default.conf

##*******************************************************************************
##-------------------MODIFICAR CON EL NOMBRE DEL PROYECTO ANGULAR----------------
##*******************************************************************************
ARG PROJECT_NAME=angular-openShift-demo

#Copy the Angular build files to the Nginx server
COPY --from=build /app/dist/${PROJECT_NAME}/browser /usr/share/nginx/html

# Expose port 8080 (required for OpenShift)
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

