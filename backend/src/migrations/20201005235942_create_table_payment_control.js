
exports.up = function(knex) {
    return knex.schema.createTable('payment_control', table => {
        table.increments('id').primary()
        table.integer('transaction_id').notNull()
        table.timestamp('date_transaction').notNull()
        table.integer('payment_type_id').references('id').inTable('payment_type').notNull()
        table.integer('orders_id').references('id').inTable('orders').notNull()
        table.integer('user_id').references('id').inTable('users').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('payment_control')
};
