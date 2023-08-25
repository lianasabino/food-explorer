const knex = require('../../database/knex')

class DisheRepository {
  async create({ title, category, description, price }) {
    const dishe = await knex('dishes').insert({
      title,
      category,
      description,
      price
    })

    return dishe
  }

  async findAllDishes() {
    const dishes = await knex('dishes')

    return dishes
  }

  async findById(id) {
    const dishe = await knex('dishes').where({ id }).first()
    return dishe
  }

  async update({ id, title, category, description, price }) {
    const dishe = await knex('dishes')
      .update({
        title,
        category,
        description,
        price
      })
      .where({ id })

    return dishe
  }

  async delete(id) {
    await knex('dishes').delete().where({ id })
  }
}

module.exports = DisheRepository
