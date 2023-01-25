const express = require('express')
const router = express.Router()
const hourly_typeController = require('../controllers/hourly_typesController')

router.get('/api/hourly_types', hourly_typeController.getAllHourly_types)
router.get('/api/hourly_types/:id', hourly_typeController.getHourly_type)
router.post('/api/hourly_types', hourly_typeController.createHourly_type)
router.put('/api/hourly_types/:id', hourly_typeController.updateHourly_type)
router.delete('/api/hourly_types/:id', hourly_typeController.deleteHourly_type)

module.exports = router
