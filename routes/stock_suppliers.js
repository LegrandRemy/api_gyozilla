const express = require('express')
const router = express.Router()
const stock_supplierController = require('../controllers/stock_suppliersController')
const { verifyToken } = require('../controllers/tokenController')

router.get(
  '/api/stock_suppliers/',
  verifyToken,
  stock_supplierController.getAllStocks_suppliers,
)
router.get(
  '/api/stock_suppliers/:id',
  verifyToken,
  stock_supplierController.getStock_supplier,
)
router.post(
  '/api/stock_suppliers',
  verifyToken,
  stock_supplierController.createStock_supplier,
)
router.patch(
  '/api/stock_suppliers/:id',
  stock_supplierController.updateStock_supplier,
)
router.delete(
  '/api/stock_suppliers/:id',
  verifyToken,
  stock_supplierController.deleteStock_supplier,
)

module.exports = router
