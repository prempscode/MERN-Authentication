import userModel from '../models/user.model.js'

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      res.status(400).json({
        message: 'All filled required'
      })
    }
    const isExists = await userModel.findOne({ email })
    if (isExists) {
      res.status(401).json({
        message: 'Email already exists'
      })
    }
  } catch (err) {
    console.log('Register Controller error : ', err.message)
  }
}

export { register }
