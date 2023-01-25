const express = require('express')
const router = express.Router()
const roleController = require('../controllers/rolesController')

router.get('/api/roles/', roleController.getAllRoles)
router.get('/api/roles/:id', roleController.getRole)
router.post('/api/roles', roleController.createRole)
router.put('/api/roles/:id', roleController.updateRole)
router.delete('/api/roles/:id', roleController.deleteRole)

module.exports = router
