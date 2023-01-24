const express = require('express')
const router = express.Router()
const sale_revenueController = require('../controllers/sales_revenuesController')

router.get('/api/sales_revenues/', sale_revenueController.getAllSales_revenues)
router.get('/api/sales_revenues/:id', sale_revenueController.getSale_revenue)
router.post('/api/sales_revenues', sale_revenueController.createSale_revenue)
router.put('/api/sales_revenues/:id', sale_revenueController.updateSale_revenue)
router.delete(
  '/api/sales_revenues/:id',
  sale_revenueController.deleteSale_revenue,
)

module.exports = router
