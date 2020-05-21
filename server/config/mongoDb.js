require('dotenv').config()
const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.MONGO_URL, ({ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }), (err) => {
        if (!err) console.log('database connected....')
        else console.log(err)
    })
}