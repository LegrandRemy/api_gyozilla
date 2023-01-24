const express = require('express')
const router = express.Router()
const suppliersController = require('../controllers/suppliersController')

router.get('/api/suppliers', suppliersController.getAllSuppliers)
// router.get('/api/suppliers/:id', suppliersController.getSupplier)
// router.post('/api/suppliers', suppliersController.createSupplier)
// router.put('/api/suppliers/:id', suppliersController.updateSupplier)
// router.delete('/api/suppliers/:id', suppliersController.deleteSupplier)

module.exports = router
