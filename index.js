'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { ApolloServer } = require('apollo-server-express');

const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./src/resolvers')
const context = require('./src/db_schemas/index')

async function run_apollo_server(){

    const typeDef = readFileSync(
        join( __dirname,'src','schema.graphql'),
        'utf-8'
    )
    
    const server = new ApolloServer({
        typeDefs: typeDef,
        resolvers: resolvers,
        context: context
    })
    
    await server.start()
    
    const app = express()
    
    const PORT = process.env.PORT || 4444;
    
    app.use(cors())
    
    /*app.use('/api',graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
        context: context
    }))*/
    
    server.applyMiddleware({ app, path: '/api' });
    
    app.listen(PORT,()=>{
        console.log(`Server listen in port ${PORT}`)
    })    
}

run_apollo_server()
