const User = require('../models/userModel')
const mongoose = require('mongoose')

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const addUser = async (req, res) => {
  const { name, age, email, job, img, chatLink } = req.body

  const newUser = new User({
    name,
    age,
    email,
    job,
    img,
    chatLink,
  })

  try {
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

const getUser = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`)
  try {
    const post = await User.findById(id)

    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`)

  await User.findByIdAndRemove(id)

  res.json({ message: 'user deleted successfully.' })
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, age, email, job, img } = req.body

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`)

  const updatedPost = { name, age, email, job, img, _id: id }

  await User.findByIdAndUpdate(id, updatedPost, { new: true })

  res.json(updatedPost)
}

module.exports = {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
}
