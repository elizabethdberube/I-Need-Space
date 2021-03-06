const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');




const PORT = process.env.PORT || 3001;


const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug: true,
    context: authMiddleware,
});

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  serve client/build 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// serve up react front-end 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



// Apollo Server
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

//  start the server
startApolloServer(typeDefs, resolvers);
