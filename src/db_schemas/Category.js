'use strict'

const Pool = require('pg').Pool
const pool = new Pool()

module.exports =  {
    getAll : () => {
        pool.query('SELECT * FROM categories ORDER BY id ASC', (err, res) => {
            if(err){
                throw err
            }
            return res.rows
        })
    },
    create : (args) => {
        pool.query('INSERT INTO categories (name,photo,priority,products) VALUES ($1,$2,$3,$4) RETURNING *',
        args,
        (err, res) => {
            if(err){
                throw err
            }
            return res.rows[0]
        })
    }
}