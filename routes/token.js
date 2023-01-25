/**
 * @swagger
 * components:
 *   schemas:
 *     token:
 *       type: object
 *       required:
 *         - 
 *       properties:
 *         username:
 *           type: string
 *           description: Nom d'utilisateur de l'utilisateur
 *         password:
 *           type: string
 *           description: Mot de passe de l'utilisateur
 *       example:
 *         username: Robert
 *         password: LePlusFort
 */

/**
 * @swagger
 * tags:
 *   name: token
 *   description: Obtenir le token d'authentification
 * /api/token:
 *   post:
 *     summary: Obtenir le token d'authentification
 *     tags: [token]
 *     requestBody:
 *        required: true
 *        content:
 *           "application/json":
 *              schema:
 *                type: "object"
 *                properties:
 *                  username:
 *                    type: "string"
 *                  password:
 *                    type: "string"
 *                required: ["username", "password"]
 *     responses:
 *       200:
 *         description: Le token d'authentification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/token'
 *       404:
 *         description: Une erreur est survenue.
 */

const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.post('/api/token/', tokenController.getToken);

module.exports = router;