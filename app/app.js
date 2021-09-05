var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var { getChadType, chadResolver } = require(`./graphql/query/getChadValue`)
var { setChadType, setChadResolver } = require(`./graphql/mutation/setChadValue`)
var chadType = require(`./graphql/types/chadType`)

var chadProcesses = [getChadType, setChadType, chadType.chadType].join('')

var schema = buildSchema(chadProcesses);

var resolvers = {
  ...setChadResolver, ...chadResolver
}


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');