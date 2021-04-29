import { Router } from 'express'
import chapter from './ChapterRoute'
import movie from './MovieRoute'

const routes = Router()

routes.use('/chapters', chapter)
routes.use('/movies', movie)

export default routes
