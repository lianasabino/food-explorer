/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable('orders', table => {
    table.increments('id')
    table.float('price')
    table.text('status')
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      .notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('orders')
