exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('email').notNull().unique()
        table.string('name').notNull()
        table.string('password').notNull()
        table.string('phone').notNull()
        table.string('cpf').notNull()
        table.string('date_joined').notNull()
        table.string('modified')
        table.string('token')
        table.integer('permission_id').references('id').inTable('permissions').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
