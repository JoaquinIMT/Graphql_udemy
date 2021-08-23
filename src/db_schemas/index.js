'use strict'

const Admin = require('./Admin')
const Customer = require('./Customer')
const Category = require('./Category')
const Product = require('./Product')

const schema = {
    Admin: Admin,
    Customer,
    Category: Category,
    Product
}

module.exports = schema
