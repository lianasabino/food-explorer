/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable('favs', table => {
    table.increments('id')
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      .notNullable()
    table
      .integer('dishe_id')
      .references('id')
      .inTable('dishes')
      .onDelete('cascade')
      .notNullable()
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('favs')
