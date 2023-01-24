const express = require('express')
const router = express.Router()
const hourly_typeController = require('../controllers/hourly_typesController')

router.get('/api/hourly_types', hourly_typeController.getAllhourly_types)
router.get('/api/hourly_types/:id', hourly_typeController.gethourly_type)
router.post('/api/hourly_types', hourly_typeController.createhourly_type)
router.put('/api/hourly_types/:id', hourly_typeController.updatehourly_type)
router.delete('/api/hourly_types/:id', hourly_typeController.deletehourly_type)

module.exports = router
