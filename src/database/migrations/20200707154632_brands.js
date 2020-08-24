exports.up = function (knex) {
  return knex.schema.createTable('Brands', function (table) {
    table.increments('ID')
    table.string('Name').notNullable()
    table.string('Image').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('Brands')
};
