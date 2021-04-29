import { Router } from 'express'
import { MovieController } from '../controller/MovieController'

const router = Router()

router.get('/find_id/:id', MovieController.findOneById)
router.get('/find_slug/:slug', MovieController.findOneBySlug)
router.get('/all', MovieController.findAll)
router.post('/new', MovieController.new)

export default router
