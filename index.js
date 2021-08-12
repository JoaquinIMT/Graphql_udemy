'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const gqlMiddleware = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./src/resolvers')

const typeDef = readFileSync(
    join( __dirname,'src','schema.graphql'),
    'utf-8'
)

const schema = makeExecutableSchema({typeDefs: typeDef, resolvers: resolvers})

const app = express()

const PORT = process.env.PORT || 4444;

const connectDB =  require('./src/db')

app.use(cors())

app.use('/api',gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server listen in port ${PORT}`)
})