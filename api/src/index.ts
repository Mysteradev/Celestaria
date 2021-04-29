import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express'
import routes from './routes/index'

createConnection().then(async (connection) => {
  const app = express()

  app.use(express.json)

  app.use('/', routes)

  app.listen(8000)

  console.log('Server started on http://localhost:8000')
}).catch(error => console.log(error))
