FROM node
# Create app directory
WORKDIR /app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json /app/
# Install app dependencies
RUN npm install
# Bundle app source
COPY . /app/

EXPOSE 5000

CMD [ "npm", "start" ]