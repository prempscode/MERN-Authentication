import express from 'express'
import {
  register,
  login,
  logout,
  getCurrentUser
} from '../controllers/auth.controller.js'
import protectedRoute from '../middleware/protected.middleware.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/', protectedRoute, getCurrentUser)

export default router
