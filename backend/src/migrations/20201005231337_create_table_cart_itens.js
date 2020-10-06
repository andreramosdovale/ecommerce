
exports.up = function(knex) {
    return knex.schema.createTable('cart_itens', table => {
        table.increments('id').primary()
        table.integer('quantity').notNull()
        table.integer('product_id').references('id').inTable('products').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cart_itens')
};