const AppError = require('../../utils/app-error')

require('dotenv/config')

const { hash } = require('bcryptjs')

class UserCreateService {
  constructor(userRepository) {
    this.repository = userRepository
  }

  async execute({ name, email, password }) {
    const allData = name && email && password

    if (!allData) {
      throw new AppError(
        'Para fazer o cadastro é necessário todas as informações'
      )
    }

    const emailInUse = await this.repository.findByEmail(email)

    if (emailInUse) {
      throw new AppError('Email está em uso, favor escolher outro!')
    }

    const passHash = await hash(password, 8)

    const isAnAdminEmail = email.includes(
      process.env.ADMIN_EMAIL || '@admin.com'
    )

    const is_admin = isAnAdminEmail ? true : false

    const user = await this.repository.create({
      name,
      email,
      password: passHash,
      is_admin
    })

    return user
  }
}
