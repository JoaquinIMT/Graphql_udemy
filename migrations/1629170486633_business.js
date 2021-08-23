
exports.up = pgm => {
    pgm.createTable('categories',{
        id: 'id',
        name: {type: 'string', notNull: true},
        photo: {type: 'string'},
        priority: {type: 'integer'},
    })
    pgm.createTable('products',{
        id: 'id',
        categoryId: {type: 'integer', references: '"categories"'},
        name: {type: 'string', notNull: true},
        description: {type: 'string'},
        photo: {type: 'string'},
    })
}
