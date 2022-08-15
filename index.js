import { port } from './config/environment';
import app from './app';
import connectDB from './db';
import graphqlServer from './graphql';

const start = async () => {
  try {
    console.log('Connecting to database');
    await connectDB();
    console.log('Connected to database');
    await app.listen(port);
    await graphqlServer.start();
    graphqlServer.applyMiddleware({
      app,
    });
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();
