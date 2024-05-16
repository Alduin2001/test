FROM node:20
WORKDIR /server
COPY packege*.json ./
RUN npm install
COPY . .
EXPOSE 3007
CMD [ "node", "index.js" ]