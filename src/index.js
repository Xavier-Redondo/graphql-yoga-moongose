import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';

import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import Bot from './resolvers/bot';
import User from './resolvers/user';

import MongooseConnector from './connectors/moongose';

const resolvers = {
  Query,
  Mutation,
  Bot,
  User
};

const options = {
  port: 4444,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  tracing: true
};

const connectMongo = async () => {
  mongoose.Promise = global.Promise;
  const mongoURI = process.env.MONGODB_URI;
  const mongoOptions = {
    keepAlive: 1,
    promiseLibrary: global.Promise
  };

  const connection = mongoose.connect(mongoURI, mongoOptions);

  return connection;
};

(async () => {
  const mongoConnection = await connectMongo();
  const mongo = new MongooseConnector(mongoConnection);

  const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: req => ({
      ...req,
      db: {
        mongo
      }
    })
  });

  server.start(options, ({ port }) => {
    console.log(`Server is running on port ${port}`);
  });
})();
