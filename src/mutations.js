'use strict'

const assign = (defaultObject, input) => Object.assign(defaultObject, input)

module.exports = {
    createAdmin: async (root,{input}, {Admin}) => {
        const adminDefault = {
            age: 0
        }
        const newAdmin = await new Admin(assign(adminDefault, input))
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
}
