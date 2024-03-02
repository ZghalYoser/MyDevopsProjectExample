# Use the official Angular Docker image as base
FROM node:latest as build-stage

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code to /app
COPY . .


CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]