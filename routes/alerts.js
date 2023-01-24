const express = require('express')
const router = express.Router()
const alertController = require('../controllers/alertsController')

router.get('/api/alerts', alertController.getAllAlerts)
router.get('/api/alerts/:id', alertController.getAlert)
router.post('/api/alerts', alertController.createAlert)
router.put('/api/alerts/:id', alertController.updateAlert)
router.delete('/api/alerts/:id', alertController.deleteAlert)

module.exports = router
