/**
 * @swagger
 * components:
 *   schemas:
 *     stock:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID du stock
 *         id_franchises:
 *           type: int
 *           description: ID de la franchise
 *         id-ingredients:
 *           type: string
 *           description: ID de l'ingredient
 *         quantity:
 *           type: string
 *           description: Quantité du stock
 *
 *       example:
 *         id: 1
 *         id_franchises: 1
 *         id_ingredients: 1
 *         quantity: 50
 *
 */

/**
 * @swagger
 * tags:
 *   name: stock
 *   description: API pour les stock
 * /api/stock:
 *   get:
 *     summary: Lister toutes les stock
 *     tags: [stock]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la stock
 *       - in: query
 *         name: id_franchise
 *         schema:
 *           type: string
 *         required: false
 *         description: ID de la franchise
 *       - in: query
 *         name: id_ingredient
 *         schema:
 *           type: string
 *         required: false
 *         description: ID de l'ingredient
 *       - in: query
 *         name: qunatity
 *         schema:
 *           type: string
 *         required: false
 *         description: Quantite du stock
 *
 *
 *     responses:
 *       200:
 *         description: La liste de tous les stocks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/stock'
 *   post:
 *     summary: Créer un stock
 *     tags: [stock]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/stock'
 *     responses:
 *       200:
 *         description: Stock créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/stock'
 *       404:
 *         description: Une erreur est survenue.
 * /api/stock/{id}:
 *   get:
 *     summary: Récupérer le stock par l'id
 *     tags: [stock]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: stock par l'id
 *     responses:
 *       200:
 *         description: stock par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/stock'
 *       404:
 *         description: La stock n'a pas été trouvé
 *   patch:
 *    summary: Mise à jour du stock par son id
 *    tags: [stock]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: false
 *        description: id du stock
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/stock'
 *    responses:
 *      200:
 *        description: Le stock a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/stock'
 *      404:
 *        description: Le stock n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un stock par son id
 *     tags: [stock]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *         description: id du stock
 *     responses:
 *       200:
 *         description: Le stock a été supprimé.
 *       404:
 *         description: Le stock n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const stockController = require('../controllers/stockController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/stock/', verifyToken, stockController.getAllStocks)
router.get('/api/stock/franchise/:franchiseId', verifyToken, stockController.getStockByFranchise)
router.get('/api/stock/ingredient/:ingredientId', verifyToken, stockController.getStockByIdIngredients)
router.get('/api/stock/:id', verifyToken, stockController.getStock)
router.post('/api/stock', verifyToken, stockController.createStock)
router.patch('/api/stock/:id', verifyToken, stockController.updateStock)
router.delete('/api/stock/:id', verifyToken, stockController.deleteStock)

module.exports = router
