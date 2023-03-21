/**
 * @swagger
 * components:
 *   schemas:
 *     ingredients:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: L'id de l'ingrédient
 *         name:
 *           type: string
 *           description: Le nom de l'ingrédient
 *         quantity:
 *           type: integer
 *           description: La quantité de l'ingrédient
 *         purchasePrice:
 *           type: integer
 *           description: Le prix d'un ingrédient
 *       example:
 *         id: 1
 *         name: "Riz"
 *         quantity: 2
 *         purchasePrice: 5
 */

/**
 * @swagger
 * tags:
 *   name: ingredients
 *   description: API pour lister les ingredients
 * /api/ingredients:
 *   post:
 *     summary: Créer un ingredient
 *     tags: [ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ingredients'
 *     responses:
 *       200:
 *         description: L'ingrédient est créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ingredients'
 *       500:
 *         description: Une erreur est survenue.
 * /api/ingredients/{id}:
 *   get:
 *     summary: Récupérer l'ingrédient par l'id
 *     tags: [ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: L'ingrédient par l'id
 *     responses:
 *       200:
 *         description: L'ingrédient par l'id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ingredients'
 *       404:
 *         description: L'ingredient n'a pas été trouvé
 *   delete:
 *     summary: Supprimer l'ingredient par son id
 *     tags: [ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de l'ingredient
 *     responses:
 *       200:
 *         description: L'ingredient a été supprimé.
 *       404:
 *         description: L'ingredient n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const ingredientController = require('../controllers/ingredientsController')
const { verifyToken } = require('../controllers/tokenController')

router.get(
  '/api/ingredients/',
  verifyToken,
  ingredientController.getAllIngredients,
)
router.get(
  '/api/ingredients/:id',
  verifyToken,
  ingredientController.getIngredient,
)
router.post(
  '/api/ingredients',
  verifyToken,
  ingredientController.createIngredient,
)
router.delete(
  '/api/ingredients/:id',
  verifyToken,
  ingredientController.deleteIngredient,
)

module.exports = router
