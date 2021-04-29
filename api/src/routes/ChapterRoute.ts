import { Router } from 'express'
import { ChapterController } from '../controller/ChapterController'

const router = Router()

router.get('/all', ChapterController.findAll)

export default router
