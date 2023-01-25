const express = require('express')
const router = express.Router()
const receiptController = require('../controllers/receiptsController')

router.get('/api/receipts/', receiptController.getAllReceipts)
router.get('/api/receipts/:id', receiptController.getReceipt)
router.post('/api/receipts', receiptController.createReceipt)
router.put('/api/receipts/:id', receiptController.updateReceipt)
router.delete('/api/receipts/:id', receiptController.deleteReceipt)

module.exports = router
