/**
 * @swagger
 * components:
 *   schemas:
 *     roles:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: L'id du role'
 *         name:
 *           type: string
 *           description: Le role d'un employé
 *       example:
 *         id: 1
 *         type: "Cuisinier"
 */

/**
 * @swagger
 * tags:
 *   name: roles
 *   description: API pour le role d'un employé
 * /api/roles:
 *   post:
 *     summary: Créer le role d'un employé
 *     tags: [roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/roles'
 *     responses:
 *       200:
 *         description: Le role est créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles'
 *       500:
 *         description: Une erreur est survenue.
 * /api/roles/{id}:
 *   get:
 *     summary: Récupérer le role par l'id
 *     tags: [roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Le role d'un employé par l'id
 *     responses:
 *       200:
 *         description: Le role d'un employé par l'id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles'
 *       404:
 *         description: Le role n'a pas été trouvé
 *   delete:
 *     summary: Supprimer le role par son id
 *     tags: [roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id du role
 *     responses:
 *       200:
 *         description: Le role a été supprimé.
 *       404:
 *         description: Le role n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const roleController = require('../controllers/rolesController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/roles/', verifyToken, roleController.getAllRoles)
router.get('/api/roles/:id', verifyToken, roleController.getRole)
router.post('/api/roles', verifyToken, roleController.createRole)
router.delete('/api/roles/:id', verifyToken, roleController.deleteRole)

module.exports = router
