import userModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
      return res.status(400).json({
        message: 'All fields required to filled'
      })
    }

    const isExists = await userModel.findOne({ email })

    if (isExists) {
      return res.status(401).json({
        message: 'Email already exists'
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword
    })

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: '7d'
    })

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(201).json({
      message: ' User registrated successfully'
    })
  } catch (err) {
    console.log('Register Controller error : ', err.message)
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields required to filled'
      })
    }

    const user = await userModel.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: 'Invalid credentials'
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: 'Invalid credentials'
      })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: '7d'
    })

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(200).json({
      message: 'Login successful'
    })
  } catch (error) {
    console.log('Error occured at login auth controller : ', error.message)
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export { register, login }
