/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable('orders_dishes', table => {
    table.increments('id')
    table
      .integer('order_id')
      .references('id')
      .inTable('orders')
      .onDelete('cascade')
      .notNullable()
    table
      .integer('dishe_id')
      .references('id')
      .inTable('dishes')
      .onDelete('cascade')
      .notNullable()
    table.integer('dishes_amount')
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('orders_dishes')
