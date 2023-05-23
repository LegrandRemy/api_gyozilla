/**
 * @swagger
 * components:
 *   schemas:
 *     order_lines:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID
 *         id_orders:
 *           type: string
 *           description: ID de la commande
 *         id_products:
 *           type: string
 *           description: ID du produit
 *         quantity:
 *           type: string
 *           description: Quantité de produit de la commande
 *       example:
 *         id: 1
 *         id_orders: 1
 *         id_products: 1
 *         quantity: 5
 */


/**
 * @swagger
 * tags:
 *   name: order_lines
 *   description: API pour les commandes
 * /api/order_lines:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister toutes les commandes
 *     tags: [order_lines]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id
 *       - in: query
 *         name: id_orders
 *         schema:
 *           type: string
 *         required: false
 *         description: id de la commande
 *       - in: query
 *         name: id_products
 *         schema:
 *           type: string
 *         required: false
 *         description: id du produit
 *       - in: query
 *         name: quantity
 *         schema:
 *           type: integer
 *         required: false
 *         description: quantité du produit dans la commande
 *     responses:
 *       200:
 *         description: La liste de toutes les commandes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/order_lines'
 *   post:
 *     summary: Créer une nouvelle commmande
 *     tags: [order_lines]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order_lines'
 *     responses:
 *       200:
 *         description: Commande créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order_lines'
 *       404:
 *         description: Une erreur est survenue.
 * /api/order_lines/{id}:
 *   get:
 *     summary: Récupérer la commande par l'id
 *     tags: [order_lines]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Commmande par l'id
 *     responses:
 *       200:
 *         description: Commmande par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order_lines'
 *       404:
 *         description: La commande n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour de la commande par son id
 *    tags: [order_lines]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de la commande
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/order_lines'
 *    responses:
 *      200:
 *        description: La commande a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/order_lines'
 *      404:
 *        description: La commande n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une commande par son id
 *     tags: [order_lines]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la commande
 *
 *     responses:
 *       200:
 *         description: La commande a été supprimé.
 *       404:
 *         description: La commande n'a pas été trouvé.
 */


const express = require('express')
const router = express.Router()
const orderLinesController = require('../controllers/order_linesController')
const { verifyToken } = require('../controllers/tokenController')

router.get(
  '/api/order_lines',
  verifyToken,
  orderLinesController.getAllOrderLines,
)
router.get(
  '/api/order_lines/orders/:idOrders/products/:idProducts',
  verifyToken,
  orderLinesController.getAllOrderLinesByONP,
)
router.get(
  '/api/order_lines/:id',
  verifyToken,
  orderLinesController.getOrderLine,
)
router.post(
  '/api/order_lines',
  verifyToken,
  orderLinesController.createOrderLine,
)
router.patch(
  '/api/order_lines/:id',
  verifyToken,
  orderLinesController.updateOrderLine,
)
router.delete(
  '/api/order_lines/:id',
  verifyToken,
  orderLinesController.deleteOrderLine,
)

module.exports = router
