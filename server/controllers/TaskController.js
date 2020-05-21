const Task = require('../models/Task')

class TaskController {

    static async getTasks (req, res, next) {
        try {
            const tasks = await Task.find({ user_id: req.userData.id })
            res.status(200).json(tasks)
        } catch (err) {
            next(err)
        }
    }

    static async getTask (req, res, next) {
        try {
            const task = await Task.findOne({ _id: req.params.id })
            res.status(200).json(task)
        } catch (err) {
            next(err)
        }
    }

    static async postTask (req, res, next) {
        const { title, description, project_id } = req.body
        try {
            const post = await Task.create({ title, description, user_id: req.userData.id, project_id })
            res.status(201).json({ success: true, task: post })
        } catch (err) {
            next(err)
        }
    }

    static async deleteTask (req, res, next) {
        try {
            await Task.remove({ _id: req.params.id })
            res.status(200).json({ success: true, msg: 'Task deleted' })
        } catch (err) {
            next(err)
        }
    }

    static async updateTask (req, res, next) {
        const { title, description, project_id, status } = req.body
        const updateData = {
            title,
            description,
            project_id,
            status,
            date: new Date()
        }
        try {
            await Task.updateOne({ _id: req.params.id }, { $set: updateData })
            res.status(200).json({ success: true, msg: 'Task updated' })
        } catch (err) {
            
        }
    }

    static async updateStatus (req, res, next) {
        const { status, move } = req.body
        let newStatus

        if (move === 'next') {
            if (status === 'incomplete') newStatus = 'onprocess'
            else if (status === 'onprocess') newStatus = 'onreview'
            else newStatus = 'completed'
        } else if (move === 'prev') {
            if (status === 'completed') newStatus = 'onreview'
            else if (status === 'onreview') newStatus = 'onprocess'
            else newStatus = 'incomplete'
        }

        try {
            await Task.updateOne({ _id: req.params.id }, { $set: { status: newStatus } })
            res.status(200).json({ success: true, msg: 'Status updated' })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = TaskController