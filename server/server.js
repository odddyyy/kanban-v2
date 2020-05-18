require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

//database connection
const db = require('./config/mongoDb')
db()

//routing
app.use('/', require('./routes'))

//error handler
app.use(require('./middlewares/errorHandler'))

app.listen(PORT, console.log(`Server running on port: ${PORT}`))