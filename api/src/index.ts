import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import cors from 'cors'
import routes from './routes/index'

const port = 8000

createConnection().then(async (connection) => {
  const app = express()

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000'
    })
  )

  app.use(express.json())

  app.use('/api', routes)

  app.listen(process.env.PORT || port)

  console.log(`Server started on http://localhost:${process.env.PORT || port}`)
}).catch(error => console.log(error))
