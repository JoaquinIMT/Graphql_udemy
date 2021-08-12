'use strict'

const query = require('./queries')
const mutation = require('./mutations')
const types = require('./types')

module.exports = {
    Query: query,
    Mutation: mutation,
    ...types
}