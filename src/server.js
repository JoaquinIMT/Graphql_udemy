'use strict'

const express = require('express')
const cors = require('cors')
const gqlMiddleware = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./')


const typeDef = readFileSync(
    join( __dirname,'src','schema.graphql'),
    'utf-8'
)

const schema = makeExecutableSchema({typeDefs,resolvers})

const app = express()

const PORT = process.env.PORT || 4444;

app.use(cors())

app.use()

app.listen(PORT,()=>{
    console.log(`Server listen in port ${PORT}`)
})