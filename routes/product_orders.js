const express = require('express')
const router = express.Router()
const product_orderController = require('../controllers/product_ordersController')

router.get('/api/product_orders', product_orderController.getAllproduct_orders)
router.get('/api/product_orders/:id', product_orderController.getProduct_order)
router.post('/api/product_orders', product_orderController.createProduct_order)
router.put(
  '/api/product_orders/:id',
  product_orderController.updateProduct_order,
)
router.delete(
  '/api/product_orders/:id',
  product_orderController.deleteProduct_order,
)

module.exports = router
