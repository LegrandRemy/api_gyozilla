const express = require('express')
const router = express.Router()
const measurement_unitController = require('../controllers/measurement_unitsController')

router.get(
  '/api/measurement_units',
  measurement_unitController.getAllMeasurement_units,
)
router.get(
  '/api/measurement_units/:id',
  measurement_unitController.getMeasurement_unit,
)
router.post(
  '/api/measurement_units',
  measurement_unitController.createMeasurement_unit,
)
router.put(
  '/api/measurement_units/:id',
  measurement_unitController.updateMeasurement_unit,
)
router.delete(
  '/api/measurement_units/:id',
  measurement_unitController.deleteMeasurement_unit,
)

module.exports = router
