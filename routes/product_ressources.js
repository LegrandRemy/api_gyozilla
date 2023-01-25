const express = require('express')
const router = express.Router()
const product_ressourceController = require('../controllers/product_ressourcesController')

router.get(
  '/api/product_ressources',
  product_ressourceController.getAllproduct_ressources,
)
router.get(
  '/api/product_ressources/:id',
  product_ressourceController.getProduct_ressource,
)
router.post(
  '/api/product_ressources',
  product_ressourceController.createProduct_ressource,
)
router.put(
  '/api/product_ressources/:id',
  product_ressourceController.updateProduct_ressource,
)
router.delete(
  '/api/product_ressources/:id',
  product_ressourceController.deleteProduct_ressource,
)

module.exports = router
