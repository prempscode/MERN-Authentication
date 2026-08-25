import jwt from 'jsonwebtoken'

const protectedRoute = (req, res, next) => {
  try {
    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN)

    req.userId = decoded.userId

    next()
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid or expired token'
    })
  }
}

export default protectedRoute
