const UserRepository = require('../repositories/user/userRepository')

const UserCreateService = require('../service/users/userCreateService')

class UserControllers {
  async create(req, res) {
    const { name, email, password } = req.body

    const userRepository = new UserRepository()

    const userCreateService = new UserCreateService(userRepository)

    const user = await userCreateService.execute({ name, email, password })

    return res.status(201).json({ user })
  }
}

module.exports = UserControllers
