const User = require('../models/User')
//helpers
const { hashPassword, verifyPassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/token')

class UserController {

    static async register (req, res, next) {
        const { username, email, password } = req.body
        try {
            const exist = await User.findOne({ email })
            if (exist) throw ({ status: 400, msg: 'Email already registered' })
            const hashedPassword = hashPassword(password)
            const user = await User.create({ username, email, password: hashedPassword })
            console.log(user)
            const token = createToken({id: user._id})
            res.json({ token, user: { username: user.username, email: user.email } })
        } catch (err) {
            next(err)
        }
    }

    static async login (req, res, next) {
        const { email, password } = req.body
        try {
            const exist = await User.findOne({ email })
            if (!exist) throw ({ status: 400, msg: 'Invalid email / password' })
            const checkPassword = verifyPassword(password, exist.password)
            if (!checkPassword) throw ({ status: 400, msg: 'Invalid email / password' })
            const token = createToken({id: exist._id})
            res.json({ token, user: { username: exist.username, email: exist.email }})
        } catch (err) {
            next(err)
        }
    }

    static async getProfile (req, res, next) {
        try {
            const user = await User.findOne({ _id: req.userData.id })
            if (!user) throw ({ status: 404, msg: 'User not exist' })
            const { username, email } = user
            res.status(200).json({ username, email })
        } catch (err) {
            next(err)
        }
    }

    static async changePassword (req, res, next) {
        const { password, newPassword } = req.body
        try {
            const user = await User.findOne({ _id: req.userData.id })
            if (!user) throw ({ status: 404, msg: 'User not exist' })
            const checkPassword = verifyPassword(password, user.password)
            if (!checkPassword) throw ({ status: 404, msg: 'Password does not match' })
            const newHashPassword = hashPassword(newPassword)
            await User.updateOne({ _id: req.userData.id }, {$set: {password: newHashPassword}})
            res.status(201).json({ success: true, msg: 'Password changed' })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = UserController