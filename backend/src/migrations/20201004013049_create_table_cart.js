
exports.up = function(knex) {
    return knex.schema.createTable('cart', table => {
        table.increments('id').primary()
        table.integer('quantity')
        table.dateTime('date_added')
        table.integer('user_id').references('id').inTable('users').notNull()
        table.integer('product_id').references('id').inTable('products').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cart')
};
