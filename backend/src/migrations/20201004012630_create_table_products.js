
exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.integer('price').notNull()
        table.integer('stock').notNull()
        table.integer('category_id').references('id').inTable('categories').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
