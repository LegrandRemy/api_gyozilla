const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contactController')

router.post('/api/contact', contactController.sendMail)

module.exports = router
