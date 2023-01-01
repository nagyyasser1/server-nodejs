const express = require('express')
const router = express.Router()

const {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} = require('../controllers/usersController')

router.get('/',(req,res,nxt)=>{
  res.send("home page")
})
router.get('/users', getUsers)
router.get('/:id', getUser)
router.post('/add', addUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router
