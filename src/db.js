'use strict'

const mongoose = require('mongoose')
const {MONGO_URL} = process.env

let connection
const mongoOptions = {
    useNewUrlParser:true,
    useUnifiedTopology: true
}

async function connectDB(params) {
    if(connection) return connection

    let client

    await mongoose.connect(MONGO_URL,mongoOptions)
    .then(()=>{
        console.log("SUCCESS IN CONECTION")
    })
    .catch((e)=>{
        console.log(`\nError ${e}`)
    })
}

module.exports = connectDB