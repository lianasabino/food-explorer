/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable('dishes_ingredients', table => {
    table.increments('id')
    table
      .integer('dishe_id')
      .references('id')
      .inTable('dishes')
      .onDelete('cascade')
      .notNullable()
    table
      .integer('ingredients_id')
      .references('id')
      .inTable('ingredients')
      .onDelete('cascade')
      .notNullable()
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('dishes_ingredients')
