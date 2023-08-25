const knex = require('../../database/knex')

class UserRepository {
  async create({ name, email, password, is_admin }) {
    const user = await knex('users').insert({ name, email, password, is_admin })
    return user
  }

  async update(data) {
    await knex('users').update(data).where({ id: data.id })
  }

  async findById(id) {
    const user = await knex('users').where({ id }).first()
    return user
  }

  async findByEmail(email) {
    const user = await knex('users').where({ email }).first()
    return user
  }
}

module.exports = UserRepository
