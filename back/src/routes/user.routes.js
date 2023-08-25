const { Router } = require('express')

const UserControllers = require('../controllers/UserControllers')

const routes = Router()

const userControllers = new UserControllers()

routes.post('/', userControllers.create)

module.exports = routes
