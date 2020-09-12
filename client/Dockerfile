# Get the base node image
FROM node

# Set the working dir for container
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy other project files
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]