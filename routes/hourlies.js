const express = require('express')
const router = express.Router()
const hourliesController = require('../controllers/hourliesController')

router.get('/api/hourlies/', hourliesController.getAllHourlies)
router.get('/api/hourlies/:id', hourliesController.getHourlie)
router.post('/api/hourlies', hourliesController.createHourlie)
router.put('/api/hourlies/:id', hourliesController.updateHourlie)
router.delete('/api/hourlies/:id', hourliesController.deleteHourlie)

module.exports = router
