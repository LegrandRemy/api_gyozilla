const express = require('express')
const router = express.Router()
const product_categoryController = require('../controllers/product_categoriesController')

router.get(
  '/api/product_categories',
  product_categoryController.getAllProduct_categories,
)
router.get(
  '/api/product_categories/:id',
  product_categoryController.getProduct_category,
)
router.post(
  '/api/product_categories',
  product_categoryController.createProduct_category,
)
router.put(
  '/api/product_categories/:id',
  product_categoryController.updateProduct_category,
)
router.delete(
  '/api/product_categories/:id',
  product_categoryController.deleteProduct_category,
)

module.exports = router
