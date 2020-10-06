
exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('id').primary()
        table.integer('user_id').references('id').inTable('user').notNull()
        table.integer('address_id').references('id').inTable('address').notNull()
        table.integer('cart_id').references('id').inTable('cart').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders')
};
