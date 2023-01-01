const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  job: String,
  img: String,
  chatLink: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const User = mongoose.model('user', userSchema)

module.exports = User
