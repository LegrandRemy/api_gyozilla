const express = require('express')
const router = express.Router()
const orderController = require('../controllers/ordersController')

router.get('/api/orders', orderController.getAllOrders)
router.get('/api/orders/:id', orderController.getOrder)
router.post('/api/orders', orderController.createOrder)
router.put('/api/orders/:id', orderController.updateOrder)
router.delete('/api/orders/:id', orderController.deleteOrder)

module.exports = router
