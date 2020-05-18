module.exports = (err, req, res, next) => {
    console.log(err, "ERROR FROM ERROR HANDLER")
    if (err.name === 'JsonWebTokenError') res.status(400).json('Invalid token')
    res.status(err.status).json(err.msg)
}