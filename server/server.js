import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import { config } from 'dotenv'
import dns from 'dns'
import healthCheck from './routes/health.route.js'
import authRouter from './routes/auth.route.js'

dns.setServers(['1.1.1.1', '8.8.8.8'])

const app = express()
config()
connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true }))
app.use('/api', healthCheck)
app.use('/api/auth', authRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})
