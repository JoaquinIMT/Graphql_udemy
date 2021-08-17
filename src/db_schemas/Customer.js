'use strict'

const mongose = require('mongoose')

const Schema = mongose.Schema

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    card: {
        type: String
    },
    ubication: {
        type: String
    }
 })

 module.exports = mongose.model('Customer', customerSchema)
