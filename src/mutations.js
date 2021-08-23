'use strict'
const {handler} = require('./error_handler')
const assign = (defaultObject, input) => Object.assign(defaultObject, input)

module.exports = {
    createAdmin: async (root,{input}, {Admin}) => {
        const adminDefault = {
            age: 0
        }
        const newAdmin = await Admin.create( assign(adminDefault, input)).catch(handler) 
        return newAdmin        
    },
    createCustomer: async (root,{input}, {Customer}) => {
        const customerDefault = {
            age: 0,
            card: '',
            ubication: ''
        }
        const newCustomer = await new Customer(assign(customerDefault, input))
        return newCustomer
    },
    createCategory: async (root,{input},{Category}) => {
        const categoryDefault = {
            photo: '',
            priority: '',
            products: []
        }
        const newCategory = await new Category(assign(categoryDefault,input))
        return newCategory
    },
    createProduct: async (root,{input}, {Product}) => {
        const productDefault = {
            description: '',
            photo: ''
        }
        const newProduct = await new Product(assign(productDefault, input))
        return newProduct
    },
    deleteAdmin: async (root, {id}, {Admin}) => {
        const deletedAdmin = await Admin.delete(id)
        return deletedAdmin
    },
    editAdmin: async (root, {id,input}, {Admin}) => {
        
        const editedAdmin =  Admin.edit(assign(input))
    }
}
