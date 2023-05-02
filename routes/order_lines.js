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
 *         description: id de la commande
 *       - in: query
 *         name: date_order
 *         schema:
 *           type: string
 *         required: false
 *         description: date de paiement de la commande
 *       - in: query
 *         name: total_price
 *         schema:
 *           type: string
 *         required: false
 *         description: prix de la commande
 *       - in: query
 *         name: id_status
 *         schema:
 *           type: integer
 *         required: false
 *         description: status de la commande
 *       - in: query
 *         name: id_franchises
 *         schema:
 *           type: integer
 *         required: false
 *         description: Id de la franchise
 *       - in: query
 *         name: id_customers
 *         schema:
 *           type: integer
 *         required: false
 *         description: Id utilisateur de la commande
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

/**
 * @swagger
 * components:
 *   schemas:
 *     orders:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la commande
 *         date_order:
 *           type: string
 *           description: Date de la commande
 *         total_price:
 *           type: string
 *           description: Prix de la commande
 *         id_status:
 *           type: string
 *           description: Status de la commande
 *         id_franchises:
 *           type: string
 *           description: Franchise lié à la commande
 *         id_customers:
 *           type: string
 *           description: Client de la commande
 *       example:
 *         id: 1
 *         date_order: 15/02/2023
 *         total_price: 25€
 *         id_status: 1
 *         id_franchises: 1
 *         id_customers: 1
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
