'use strict'

const {DATABASE_URL} = process.env
const Pool = require('pg').Pool
const pool = new Pool({connectionString: DATABASE_URL,})

module.exports =  {
    getAll : async () => {
        const {rows} = await pool.query('SELECT * FROM admins ORDER BY id ASC')
        return rows
    },
    getById: async (id) => {
        const {rows} = await pool.query('SELECT * FROM admins WHERE id=$1',[id])
        return rows[0]
    },
    create : async ({name, last_name, age, email, password, phone}) => {
        const { rows } = await pool.query('INSERT INTO admins (name,last_name,age,email,password,phone) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
        [name, last_name, age, email, password, phone])
        return rows[0]
    },
    delete : async (id) => {
        const {rowCount} = await pool.query('DELETE FROM admins WHERE id=$1',[id])
        return rowCount>0
    },
    edit : async (id, {name, last_name, age, email, password, phone}) => {
        
    }

}
