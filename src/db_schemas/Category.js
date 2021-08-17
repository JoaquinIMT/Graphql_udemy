'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = require('./Product')

const categorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    photo: {
        type: String
    },
    priority: {
        type: Number
    },
    products: {
        type: [Product.Schema]
    }
})

module.exports = mongoose.model('Category', categorySchema)