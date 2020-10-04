
exports.up = function(knex) {
    return knex.schema.createTable('permissions', table => {
        table.increments('id').primary()
        table.string('type')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('permissions')
};
