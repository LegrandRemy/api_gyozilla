const express = require('express')
const router = express.Router()
const hourliesController = require('../controllers/hourliesController')

router.get('/api/hourlies/', hourliesController.getAllHourlies)
router.get('/api/hourlies/:id', hourliesController.getHourly)
router.post('/api/hourlies', hourliesController.createHourly)
router.put('/api/hourlies/:id', hourliesController.updateHourly)
router.delete('/api/hourlies/:id', hourliesController.deleteHourly)

module.exports = router
