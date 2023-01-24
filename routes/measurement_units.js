const express = require('express')
const router = express.Router()
const measurement_unitController = require('../controllers/measurement_unitsController')

router.get(
  '/api/measurement_units',
  measurement_unitController.getAllmeasurement_units,
)
router.get(
  '/api/measurement_units/:id',
  measurement_unitController.getmeasurement_unit,
)
router.post(
  '/api/measurement_units',
  measurement_unitController.createmeasurement_unit,
)
router.put(
  '/api/measurement_units/:id',
  measurement_unitController.updatemeasurement_unit,
)
router.delete(
  '/api/measurement_units/:id',
  measurement_unitController.deletemeasurement_unit,
)

module.exports = router
