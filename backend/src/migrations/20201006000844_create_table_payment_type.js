
exports.up = function(knex) {
    return knex.schema.createTable('payment_type', table => {
        table.increments('id').primary()
        table.string('name').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('payment_type')
};
