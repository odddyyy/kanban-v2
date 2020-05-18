const router = require('express').Router()
const UserController = require('../controllers/UserController')
//auth
const { authentication } = require('../middlewares/auth')

// POST
// /user/register
// Registering new user
router.post('/register', UserController.register)

// POST
// /user/login
// Handling user login
router.post('/login', UserController.login)

// GET
// /user/profile
// Get that specific user details (username, email, password)
router.get('/profile', authentication, UserController.getProfile)

// PUT
// /user/changepassword
// Change the existing password with the new one
router.put('/changepassword', authentication, UserController.changePassword)

module.exports = router