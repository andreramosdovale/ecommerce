
exports.up = function(knex) {
    return knex.schema.createTable('cart', table => {
        table.increments('id').primary()
        table.integer('user_id').references('id').inTable('users').notNull()
        table.integer('cart_itens_id').references('id').inTable('cart_itens').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cart')
};
