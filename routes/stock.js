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
 *           description: ID de la stock
 *         label:
 *           type: string
 *           description: Nom de la stock
 *         price:
 *           type: string
 *           description: Prix de la stock
 *         reference:
 *           type: string
 *           description: Référence de la stock
 *         quantity:
 *           type: string
 *           description: Quantity de la stock
 *         stock_types:
 *           type: int
 *           description: Type de la stock
 *         measurement_units:
 *           type: int
 *           description: Unité de mesure de la stock
 *
 *       example:
 *         id: 1
 *         label: Riz
 *         price: 1
 *         reference: MB500XF490
 *         quantity: 50
 *         id_stock_types: 1
 *         id_measurement_units: 1
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
 *         name: label
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de la stock
 *       - in: query
 *         name: price
 *         schema:
 *           type: string
 *         required: false
 *         description: prix de la stock
 *       - in: query
 *         name: reference
 *         schema:
 *           type: string
 *         required: false
 *         description: reference de la stock
 *
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les stock
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/stock'
 *   post:
 *     summary: Créer une nouvelle stock
 *     tags: [stock]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/stock'
 *     responses:
 *       200:
 *         description: Stock créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/stock'
 *       404:
 *         description: Une erreur est survenue.
 * /api/stock/{id}:
 *   get:
 *     summary: Récupérer la stock par l'id
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
 *         description: La stock n'a pas été trouvée
 *   patch:
 *    summary: Mise à jour de la stock par son id
 *    tags: [stock]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: false
 *        description: id de la stock
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/stock'
 *    responses:
 *      200:
 *        description: La stock a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/stock'
 *      404:
 *        description: La stock n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une stock par son id
 *     tags: [stock]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la stock
 *     responses:
 *       200:
 *         description: La stock a été supprimée.
 *       404:
 *         description: La stock n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const stockController = require('../controllers/stockController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/stock/', verifyToken, stockController.getAllStocks)
router.get('/api/stock/:id', verifyToken, stockController.getStock)
router.get(
  '/api/stock/type/:idType',
  verifyToken,
  stockController.getStockByType,
)
router.get(
  '/api/stock/supplier/:supplierId',
  verifyToken,
  stockController.getStockBySupplier,
)
router.post('/api/stock', verifyToken, stockController.createStock)
router.patch('/api/stock/:id', verifyToken, stockController.updateStock)
router.delete('/api/stock/:id', verifyToken, stockController.deleteStock)

module.exports = router
