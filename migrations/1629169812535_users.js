exports.up = pgm => {
    pgm.createTable('admins',{
        id: 'id',
        name: {type: 'string', notNull: true},
        last_name: {type: 'string', notNull: true},
        age: {type: 'integer'},
        email: {type: 'string', notNull: true},
        password: {type: 'string', notNull: true},
        phone: {type: 'string', notNull: true},
        
    })
    pgm.createTable('customers',{
        id: 'id',
        name: {type: 'string', notNull: true},
        last_name: {type: 'string', notNull: true},
        age: {type: 'integer'},
        card: {type: 'string', notNull: true},
        ubication: {type: 'string', notNull: true},
    })
}
