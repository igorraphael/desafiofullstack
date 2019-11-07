const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolver');
const LaunchAPI = require('./datasource/launch');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});