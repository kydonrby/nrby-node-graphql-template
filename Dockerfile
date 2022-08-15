FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN apt-get update
RUN apt-get -y install redis-server
RUN nohup redis-server &> redis.log &
EXPOSE 3000
CMD [ "npm", "run", "dev" ]