'use strict'

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
        const adminTest = [{_id:"aaasdas", name: "asdasd", last_name:"asdasd", age:0,email:"asdas",password:"aa",phone:"aaaaddd"}]
        const admins = await Admin.find()
        console.log(admins)
        return admins
    }
}