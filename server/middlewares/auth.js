const { verifyToken } = require('../helpers/token')
const Task = require('../models/Task')

const authentication = (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) throw ({ status: 404, msg: 'Token not provided' })
        const checkToken = verifyToken(token)
        req.userData = checkToken
        next()
    } catch (err) {
        next(err)
    }
}

const authorization = async (req, res, next) => {
    try {
        const task = await Task.findOne({ _id: req.params.id })
        if (task.user_id !== req.userData.id) throw ({ status: 404, msg: 'You are not authorized' })
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = { authentication, authorization }