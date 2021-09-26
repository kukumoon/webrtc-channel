import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { channelSchema } from './schema/channel.schema';
import { signalingSchema } from './schema/signaling.schema';

import { channelResolver } from './resolver/channel.resolver';

(async function start() {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs: [
      channelSchema,
      signalingSchema,
    ],
    resolvers: [
      channelResolver,
    ],
  });

  const server = new ApolloServer({
    schema,
    plugins: [{
      async serverWillStart() {
        return {
          async drainServer() {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            subscriptionServer.close();
          },
        };
      },
    }],
  });

  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    {
      server: httpServer,
      path: server.graphqlPath,
    },
  );

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  httpServer.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}/graphql`));
}());
