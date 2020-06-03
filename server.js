const express = require('express');
const expressGraphQL = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'MensagemTeste',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Mensagem Teste'
      }
    })
  })
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(5001, () => console.log("running on 5000"))