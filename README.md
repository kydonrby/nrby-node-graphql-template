# Nrby Node GraphQL Backend Template

This is a skeleton template of a backend that is based on NodeJS and Apollo Server Express module. You may fork this project whenever you want to write a graphql server from scratch.


## Required Installation

1. NodeJS https://nodejs.org/en/
2. Docker https://docs.docker.com/get-docker/
3. MongoDB (optional since you can change DB setup depending on project requirements) https://www.mongodb.com/

## Setting up environment

**Via Local Machine run**
1. If you manage to install NodeJS in your device, do `npm install` on the root directory of this project via Linux Terminal or Powershell for Windows users.
2. Create a copy of `.env.example` in root folder with name `.env` and fill-up the necessary fields there accordingly
3. Go to db/scripts/ then run `node seed.js` to load dummy data that can be used to test some query in this skeleton template.
4. Go back to root directory then do `npm run dev`
5. Go to http://localhost:3000/graphql to test some query

**Via Docker**
1. Create a copy of `.env.example` in root folder with name `.env` and fill-up the necessary fields there accordingly
2. On the root project, do `docker build . -t nrby/graphql`
3. Then do `docker run -p <ENVPORT>:<ENVPORT> -d --name graphql nrby/graphql`
4. Go to http://localhost:3000/graphql to test some query

## For Relational database usage

Included in this template also some installation for sequelize for easier handling of database queries. See https://sequelize.org/docs/v6/getting-started/ for more references about this.