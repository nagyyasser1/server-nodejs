const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000 || process.env.PORT
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const db = require('./config/db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', usersRouter)

app.all('*', (req, res, nxt) => {
  res.status(404).json({
    status: 'false',
    message: 'page not Found!',
  })
})

db()
app.listen(PORT, () => {
  console.log(`server running`)
})
