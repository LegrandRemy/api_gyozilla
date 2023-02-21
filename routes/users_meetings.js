const express = require('express')
const router = express.Router()
const users_meetingsController = require('../controllers/users_meetingsController')

router.get('/api/users_meetings', users_meetingsController.getAllUsers_meetings)
router.get('/api/users_meetings/:id', users_meetingsController.getUsers_meeting)
router.post('/api/users_meetings', users_meetingsController.createUsers_meeting)
router.put(
  '/api/users_meetings/:id',
  users_meetingsController.updateUsers_meeting,
)
router.delete(
  '/api/users_meetings/:id',
  users_meetingsController.deleteUsers_meeting,
)

module.exports = router
