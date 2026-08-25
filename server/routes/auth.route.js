import express from 'express'
import { register, login } from '../controllers/auth.controller.js'
import protectedRoute from '../middleware/protected.middleware.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/', protectedRoute, (req, res) => {
  try {
    res.json({
      message: 'user authorized'
    })
  } catch (err) {
    console.log(err.message)
  }
})
export default router
