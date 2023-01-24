const express = require('express')
const router = express.Router()
const contract_typeController = require('../controllers/contract_typesController')

router.get('/api/contract_types', contract_typeController.getAllContract_types)
router.get('/api/contract_types/:id', contract_typeController.getContract_type)
router.post('/api/contract_types', contract_typeController.createContract_type)
router.put(
  '/api/contract_types/:id',
  contract_typeController.updateContract_type,
)
router.delete(
  '/api/contract_types/:id',
  contract_typeController.deleteContract_type,
)

module.exports = router
