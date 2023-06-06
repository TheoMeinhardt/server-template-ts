import asyncHandler from 'express-async-handler'
import { Router } from 'express'
import { test } from '../controllers'

const router = Router()

router.get('/', asyncHandler(test))

export default router
