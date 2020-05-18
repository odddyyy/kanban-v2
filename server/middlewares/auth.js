const { verifyToken } = require('../helpers/token')

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


module.exports = { authentication }