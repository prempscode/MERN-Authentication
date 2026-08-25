import userModel from '../models/user.model'

const register = (req, res) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      res.status(400).json({
        message: 'All filled required'
      })
    }
  } catch (err) {
    console.log('Register Controller error : ', err.message)
  }
}

export default { register }
