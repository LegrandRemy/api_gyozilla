const express = require('express')
const router = express.Router()
const stepController = require('../controllers/stepsController')

router.get('/api/steps/', stepController.getAllSteps)
router.get('/api/steps/:id', stepController.getStep)
router.post('/api/steps', stepController.createStep)
router.put('/api/steps/:id', stepController.updateStep)
router.delete('/api/steps/:id', stepController.deleteStep)

module.exports = router
