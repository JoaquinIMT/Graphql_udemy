'use strict'

const Admin = require("./db_schemas/Admin")

module.exports = {
    getCategories: async (root,args, {Category}) => {
        const categories = await Category.find({})
        return categories
    },
    getCategory: async (root, { id }) => {
        
    },
    getProduct: async (root, { id }) => {

    },
    searchItems: async (root, { keyword }) => {

    },
    getAdmins: async (root,args,{Admin}) => {
        const admins = await Admin.getAll()
        return admins
    },
    getAdmin: async (root, { id }, {Admin}) => {
        const admin = await Admin.getById(id)
        return admin
    }
}