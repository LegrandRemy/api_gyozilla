const express = require('express')
const router = express.Router()
const stock_typeController = require('../controllers/stock_typesController')

router.get('/api/stock_types/', stock_typeController.getAllStocks_types)
router.get('/api/stock_types/:id', stock_typeController.getStock_type)
router.post('/api/stock_types', stock_typeController.createStock_type)
router.patch('/api/stock_types/:id', stock_typeController.updateStock_type)
router.delete('/api/stock_types/:id', stock_typeController.deleteStock_type)

module.exports = router
