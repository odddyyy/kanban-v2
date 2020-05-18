const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
//auth
const { authentication, authorization } = require('../middlewares/auth')

// GET
// /task
// Get all task for authenticated user
router.get('/', authentication, TaskController.getTasks)

// GET
// /task/:id
// Get specific task based on the ID of the task
router.get('/:id', authentication, authorization, TaskController.getTask)

// POST
// /task
// Create new task for that authenticated user
router.post('/', authentication, TaskController.postTask)

// DELETE
// /task/:id
// Deleting a task (user must be authenticated + authorized)
router.delete('/:id', authentication, authorization, TaskController.deleteTask)

// PUT
// /task/:id
// Updating a task (user must be authenticated + authorized)
router.put('/:id', authentication, authorization, TaskController.updateTask)

// PUT
// /task/status/:id
// Updating status only (user must be authenticated + authorized)
router.put('/status/:id', authentication, authorization, TaskController.updateStatus)

module.exports = router