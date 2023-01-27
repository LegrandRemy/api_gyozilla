/**
 * @swagger
 * components:
 *   schemas:
 *     steps:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID des étapes
 *         step:
 *           type: string
 *           description: Les étapes d'une recette
 *       example:
 *         id: 1
 *         step: 1. Eplucher les pommes, 2. Cuire les pommes, ...
 * tags:
 *   name: steps
 *   description: API pour les étapes de recette
 * /api/steps:
 *   post:
 *     summary: Créer les étapes d'une recette
 *     tags: [steps]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/steps'
 *     responses:
 *       200:
 *         description: Les étapes de la recette sont créés.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/steps'
 *       500:
 *         description: Une erreur est survenue.
 * /api/steps/{id}:
 *   get:
 *     summary: Récupérer les étapes d'une recette par l'id
 *     tags: [steps]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Les étapes d'une recette par l'id
 *     responses:
 *       200:
 *         description: Les étapes d'une recette par l'id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/steps'
 *       404:
 *         description: Les étapes n'ont pas été trouvé.
 *   delete:
 *     summary: Supprimer les étapes d'une recette par son id
 *     tags: [steps]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id des étapes d'une recette
 *     responses:
 *       200:
 *         description: Les étapes d'une recette a été supprimé.
 *       404:
 *         description: Les étapes d'une recette n'a pas été trouvé.
 */

const express = require('express');
const router = express.Router();
const stepController = require('../controllers/stepsController');
const { verifyToken } = require("../controllers/tokenController");

router.get('/api/steps/:id', verifyToken, stepController.getStep);
router.post('/api/steps/', verifyToken, stepController.createStep);
router.delete('/api/steps/:id', verifyToken, stepController.deleteStep);

module.exports = router;
