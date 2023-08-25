require('express-async-errors')

require('dotenv/config')

const migrationsRun = require('./database/sqlite/migrations')

const AppError = require('./utils/app-error')

const express = require('express')

const routes = require('./routes')

const cors = require('cors')

migrationsRun()

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(3333, () => console.log('running on PORT 3333'))
