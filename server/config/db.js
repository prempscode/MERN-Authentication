import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('DB connected')
    })
    await mongoose.connect(`${process.env.MONGO_URI}/mern-auth`)
  } catch (err) {
    console.log('Error occured in MongoDB connection : ', err.message)
  }
}

export default connectDB
