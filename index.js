let express = require('express');
let graphqlHTTP = require('express-graphql');
let MyGraphQLSchema = require('./schema');

let app = express();


app.use('/graphql', graphqlHTTP({
	schema: MyGraphQLSchema,
	// rootValue: root,
	graphiql: true, //启用GraphiQL
}));

app.listen(4000, () => console.log('Server running http://127.0.0.1:4000'));