import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import routes from './routes/index'

const port = 8000

createConnection().then(async (connection) => {
  const app = express()

  app.use(express.json())

  app.use('/api', routes)

  app.listen(port)

  console.log(`Server started on http://localhost:${port}`)
}).catch(error => console.log(error))
