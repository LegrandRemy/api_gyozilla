/**
 * @swagger
 * components:
 *   schemas:
 *     product_orders:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la commande de produit
 *         id_products:
 *           type: int
 *           description: ID du produit associé 
 *         id_orders:
 *           type: int
 *           description: ID de la commande associée
 *          
 *       example:
 *         id: 1
 *         id_products: 1
 *         id_categories: 1

 *
 */

/**
 * @swagger
 * tags:
 *   name: product_orders
 *   description: API pour les commandes de produit
 * /api/product_orders:
 *   get:
 *     summary: Lister toutes les commandes de produit
 *     tags: [product_orders]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de la commande de produit
 *       - in: query
 *         name: id_products
 *         schema:
 *           type: int
 *         required: false
 *         description: ID du produit associé
 *       - in: query
 *         name: id_orders
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de la commande associée
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les commandes de produit
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product_orders'
 *   post:
 *     summary: Créer une nouvelle commande de produit
 *     tags: [product_orders]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/product_orders'
 *     responses:
 *       200:
 *         description: La commande de produit a été créée'.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product_orders'
 *       404:
 *         description: Une erreur est survenue.
 * /api/product_orders/{id}:
 *   get:
 *     summary: Récupérer la commande de produit par l'id
 *     tags: [product_orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Commande de produit par l'id
 *     responses:
 *       200:
 *         description: Commande de produit par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product_orders'
 *       404:
 *         description: Le Commande de produit n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de la commande de produit par son id
 *    tags: [product_orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id de la commande de produit
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/product_orders'
 *    responses:
 *      200:
 *        description: La commande de produit a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product_orders'
 *      404:
 *        description: La commande de produit n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une commande de produit par son id
 *     tags: [product_orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id de la commande de produit
 *
 *     responses:
 *       200:
 *         description: La commande de produit a été supprimée.
 *       404:
 *         description: La commande de produit n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const product_orderController = require('../controllers/product_ordersController')

router.get('/api/product_orders', product_orderController.getAllProduct_orders)
router.get('/api/product_orders/:id', product_orderController.getProduct_order)
router.post('/api/product_orders', product_orderController.createProduct_order)
router.put(
  '/api/product_orders/:id',
  product_orderController.updateProduct_order,
)
router.delete(
  '/api/product_orders/:id',
  product_orderController.deleteProduct_order,
)

module.exports = router
