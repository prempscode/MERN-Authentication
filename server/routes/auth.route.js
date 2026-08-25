import express from 'express'
import { register, login, logout } from '../controllers/auth.controller.js'
import protectedRoute from '../middleware/protected.middleware.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/', protectedRoute, (req, res) => {
  return res.json({
    message: 'User authorized',
    userId: req.userId
  })
})
export default router
