var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var { chadType, chadResolver } = require(`./graphql/query/getChadValue`)

var schema = buildSchema(chadType);

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: chadResolver,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');