exports.up = function (knex) {
  return knex.schema.createTable('Cars', function (table) {
    table.increments('ID')
    table.string('Model').notNullable()
    table.string('Description').notNullable()
    table.integer('HorsePower').notNullable()
    table.integer('TorqueNm').notNullable()
    table.decimal('Price').notNullable()
    table.string('TypeVehicle').notNullable()
    table.integer('IDBrand').notNullable()
    table.foreign('IDBrand').references('Brands.ID')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('Cars')
};
