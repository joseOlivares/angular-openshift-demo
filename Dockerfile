### ETAPA 1: Construir la aplicación Angular ###
FROM node:lts-alpine AS build
# Establecer directorio de trabajo
WORKDIR /app
# Copiar package.json y package-lock.json
COPY package*.json ./
# Ejecutar una instalación limpia de las dependencias
RUN npm ci
# Instalar Angular CLI
RUN npm install -g @angular/cli
# Copiar todos los archivos
COPY . .
# Construir la aplicación Angular
RUN npm run build --configuration=production


### ETAPA 2: Usamos Nginx para servir la aplicación Angular ###
#FROM nginx:latest
#Usamos la version sin privilegios porque es la que  funciona en openshift
FROM nginxinc/nginx-unprivileged:stable-alpine

# Copiar la configuración de nginx para reemplazar el contenido por defecto de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

##*******************************************************************************
##-------------------MODIFICAR CON EL NOMBRE DEL PROYECTO ANGULAR----------------
##*******************************************************************************
ARG PROJECT_NAME=angular-openshift-demo

# Copiar los archivos de construcción de Angular al servidor Nginx
COPY --from=build /app/dist/${PROJECT_NAME}/browser /usr/share/nginx/html

# Exponer puerto 8080 (requerido para OpenShift)
EXPOSE 8080

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

