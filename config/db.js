const mongoose = require('mongoose')
const dotenv = require('dotenv')

mongoose.set('strictQuery', false)

dotenv.config()

const db = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('db connected')
      })
  } catch (error) {
    console.log('db can not connect!')
  }
}

module.exports = db
