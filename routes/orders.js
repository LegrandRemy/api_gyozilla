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
 *         id_order_types:
 *           type: string
 *           description: Type de commande
 *       example:
 *         id: 1
 *         date_order: "2023-11-02"
 *         total_price: 25
 *         id_status: 1
 *         id_franchises: 1
 *         id_customers: 1
 *         id_order_types: 1
 */

/**
 * @swagger
 * tags:
 *   name: orders
 *   description: API pour les commandes
 * /api/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister toutes les commandes
 *     tags: [orders]
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
 *       - in: query
 *         name: id_order_types
 *         schema:
 *           type: integer
 *         required: false
 *         description: Type de commande
 *     responses:
 *       200:
 *         description: La liste de toutes les commandes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/orders'
 *   post:
 *     summary: Créer une nouvelle commmande
 *     tags: [orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/orders'
 *     responses:
 *       200:
 *         description: Commande créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/orders'
 *       404:
 *         description: Une erreur est survenue.
 * /api/orders/{id}:
 *   get:
 *     summary: Récupérer la commande par l'id
 *     tags: [orders]
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
 *               $ref: '#/components/schemas/orders'
 *       404:
 *         description: La commande n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour de la commande par son id
 *    tags: [orders]
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
 *            $ref: '#/components/schemas/orders'
 *    responses:
 *      200:
 *        description: La commande a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/orders'
 *      404:
 *        description: La commande n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une commande par son id
 *     tags: [orders]
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
const orderController = require('../controllers/ordersController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/orders', verifyToken, orderController.getAllOrders)
router.get('/api/orders/:id', verifyToken, orderController.getOrder)
router.get(
  '/api/orders/customers/:id',
  verifyToken,
  orderController.getOrderByCustomer,
)
router.get(
  '/api/orders/:orderId/customers/:customerId',
  verifyToken,
  orderController.getOneOrderByCustomer,
)
router.get(
  '/api/orders/franchise/:franchiseId',
  verifyToken,
  orderController.getAllOrdersByFranchise,
)
router.get(
  '/api/orders/status/:idStatus',
  verifyToken,
  orderController.getOrderByStatus,
)
router.post('/api/orders', verifyToken, orderController.createOrder)
router.patch('/api/orders/:id', verifyToken, orderController.updateOrder)
router.delete('/api/orders/:id', verifyToken, orderController.deleteOrder)

module.exports = router
