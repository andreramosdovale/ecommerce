
exports.up = function(knex) {
    return knex.schema.createTable('address', table => {
        table.increments('id').primary()
        table.string('country').notNull()
        table.string('state').notNull()
        table.string('city').notNull()
        table.string('district').notNull()
        table.string('postcode').notNull()
        table.string('address').notNull()
        table.string('address_number').notNull()
        table.string('address_complement').notNull()
        table.integer('user_id').references('id').inTable('users').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('address')
};
