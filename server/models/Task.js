const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'incomplete' },
    date: { type: Date, default: Date.now() },
    user_id: { type: String, required: true },
    project_id: { type: Number, default: null }
})

module.exports = mongoose.model('Tasks', TaskSchema)