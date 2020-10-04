
exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('id').primary()
        table.integer('user_Id').references('id').inTable('user').notNull()
        table.integer('address_Id').references('id').inTable('address').notNull()
        table.integer('cart_Id').references('id').inTable('cart').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders')
};
