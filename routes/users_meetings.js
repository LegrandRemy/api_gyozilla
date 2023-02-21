const express = require('express')
const router = express.Router()
const users_meetingsController = require('../controllers/users_meetingsController')

router.get('/api/Users_Meetings', users_meetingsController.getAllUsers_meetings)
router.get('/api/Users_Meetings/:id', users_meetingsController.getUsers_meeting)
router.post('/api/Users_Meetings', users_meetingsController.createUsers_meeting)
router.put(
  '/api/Users_Meetings/:id',
  users_meetingsController.updateUsers_meeting,
)
router.delete(
  '/api/Users_Meetings/:id',
  users_meetingsController.deleteUsers_meeting,
)

module.exports = router
