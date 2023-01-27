const express = require('express')
const router = express.Router()
const productController = require('../controllers/productsController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/products/', verifyToken, productController.getAllProducts)
router.get('/api/products/:id', verifyToken, productController.getProduct)
router.post('/api/products', verifyToken, productController.createProduct)
router.put('/api/products/:id', verifyToken, productController.updateProduct)
router.delete('/api/products/:id', verifyToken, productController.deleteProduct)

module.exports = router
