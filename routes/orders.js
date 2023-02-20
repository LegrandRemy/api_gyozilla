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
 *         status:
 *           type: string
 *           description: Status de la commande
 *         payement_at:
 *           type: string
 *           description: Paiement de la commande
 *         price:
 *           type: string
 *           description: Prix de la commande
 *         id_sales_revenues:
 *           type: string
 *           description: CA
 *         id_users:
 *           type: string
 *           description: Client de la commande
 *       example:
 *         id: 1
 *         status: En cours
 *         payement_at: 15/02/2023
 *         price: 25€
 *         id_sales_revenues: 2
 *         id_users: 3
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
 *         name: status
 *         schema:
 *           type: string
 *         required: false
 *         description: status de la commande
 *       - in: query
 *         name: payement_at
 *         schema:
 *           type: string
 *         required: false
 *         description: date de paiement de la commande
 *       - in: query
 *         name: price
 *         schema:
 *           type: string
 *         required: false
 *         description: prix de la commande
 *       - in: query
 *         name: id_sales_revenues
 *         schema:
 *           type: string
 *         required: false
 *         description: Id CA de la commande
 *       - in: query
 *         name: id_users
 *         schema:
 *           type: string
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
router.post('/api/orders', verifyToken, orderController.createOrder)
router.put('/api/orders/:id', verifyToken, orderController.updateOrder)
router.delete('/api/orders/:id', verifyToken, orderController.deleteOrder)

module.exports = router
