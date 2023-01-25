const express = require('express')
const router = express.Router()
const ratingsController = require('../controllers/ratingsController')

router.get('/api/ratings/', ratingsController.getAllRatings)
router.get('/api/ratings/:id', ratingsController.getRating)
router.post('/api/ratings', ratingsController.createRating)
router.put('/api/ratings/:id', ratingsController.updateRating)
router.delete('/api/ratings/:id', ratingsController.deleteRating)

module.exports = router
