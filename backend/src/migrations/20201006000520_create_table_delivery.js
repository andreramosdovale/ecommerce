
exports.up = function(knex) {
    return knex.schema.createTable('delivery', table => {
        table.increments('id').primary()
        table.boolean('exited').notNull()
        table.string('company').notNull()
        table.timestamp('date_exited').notNull()
        table.integer('user_id').references('id').inTable('user').notNull()
        table.integer('address_id').references('id').inTable('address').notNull()
        table.integer('orders_id').references('id').inTable('orders').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('delivery')
};
