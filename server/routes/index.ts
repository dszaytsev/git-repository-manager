import { Router } from 'express'

import api from './api'

const router = Router()

router.use('/api/repos', api)

export default router
