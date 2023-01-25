const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const { auth } = require('../helpers/verifyToken');


router.get('/api/users', auth, userController.getAllUsers);
router.get('/api/users/:id', userController.getUser);
router.post('/api/users', userController.createUser);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;