const knex = require('../../database/knex')

class UseRepository {
  async create({ name, email, password, is_admin }) {
    await knex('users').insert({ name, email, password, is_admin })
  }

  async update(data) {
    await knex('users').update(data).where({ id: data.id })
  }

  async findById(id) {
    const user = await knex('users').where({ id }).first()
    return user
  }

  async findById(email) {
    const user = await knex('users').where({ email }).first()
    return user
  }
}

module.exports = UseRepository
