const express = require('express')
const router = express.Router()
const meetingController = require('../controllers/meetingsController')

router.get('/api/meetings', meetingController.getAllMeetings)
router.get('/api/meetings/:id', meetingController.getMeeting)
router.post('/api/meetings', meetingController.createMeeting)
router.put('/api/meetings/:id', meetingController.updateMeeting)
router.delete('/api/meetings/:id', meetingController.deleteMeeting)

module.exports = router
