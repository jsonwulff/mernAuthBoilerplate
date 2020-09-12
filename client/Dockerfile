FROM node
# Create app directory
WORKDIR /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json /usr/src/app/
# Install app dependencies
RUN npm install
# Bundle app source
COPY . /usr/src/app/

EXPOSE 3000

CMD [ "npm", "start" ]