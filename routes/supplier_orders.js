/**
 * @swagger
 * components:
 *   schemas:
 *     supplier_orders:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la commande du fournisseur
 *         id_suppliers:
 *           type: int
 *           description: ID du produit associé 
 *         date_order:
 *           type: int
 *           description: ID du produit associé 
 *         total_price:
 *           type: int
 *           description: ID du produit associé 
 *         id_franchises:
 *           type: int
 *           description: ID de la commande associée
 *          
 *       example:
 *         id: 1
 *         date_order: 2023-11-02
 *         total_price: 100
 *         id_suppliers: 1
 *         id_franchises: 1

 *
 */

/**
 * @swagger
 * tags:
 *   name: supplier_orders
 *   description: API pour les commandes du fournisseur
 * /api/supplier_orders:
 *   get:
 *     summary: Lister toutes les commandes du fournisseur
 *     tags: [supplier_orders]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de la commande du fournisseur
 *       - in: query
 *         name: date_order
 *         schema:
 *           type: datetime
 *         required: false
 *         description: Date de la commande fournisseur
 *       - in: query
 *         name: total_price
 *         schema:
 *           type: int
 *         required: false
 *         description: Prix de la commande
 *       - in: query
 *         name: id_suppliers
 *         schema:
 *           type: int
 *         required: false
 *         description: ID du fournisseur associée
 *       - in: query
 *         name: id_franchises
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de la franchise associée
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les commandes du fournisseur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/supplier_orders'
 *   post:
 *     summary: Créer une nouvelle commande du fournisseur
 *     tags: [supplier_orders]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/supplier_orders'
 *     responses:
 *       200:
 *         description: La commande du fournisseur a été créée'.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/supplier_orders'
 *       404:
 *         description: Une erreur est survenue.
 * /api/supplier_orders/{id}:
 *   get:
 *     summary: Récupérer la commande du fournisseur par l'id
 *     tags: [supplier_orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Commande du fournisseur par l'id
 *     responses:
 *       200:
 *         description: Commande du fournisseur par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/supplier_orders'
 *       404:
 *         description: Le Commande du fournisseur n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de la commande du fournisseur par son id
 *    tags: [supplier_orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id de la commande du fournisseur
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/supplier_orders'
 *    responses:
 *      200:
 *        description: La commande du fournisseur a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/supplier_orders'
 *      404:
 *        description: La commande du fournisseur n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une commande du fournisseur par son id
 *     tags: [supplier_orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id de la commande du fournisseur
 *
 *     responses:
 *       200:
 *         description: La commande du fournisseur a été supprimée.
 *       404:
 *         description: La commande du fournisseur n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const product_orderController = require('../controllers/supplier_ordersController')

router.get(
  '/api/supplier_orders',
  supplier_ordersController.getAllSupplier_orders,
)
router.get(
  '/api/supplier_orders/:id',
  supplier_ordersController.getSupplier_order,
)
router.post(
  '/api/supplier_orders',
  supplier_ordersController.createProduct_order,
)
router.patch(
  '/api/supplier_orders/:id',
  supplier_orderController.updateSupplier_order,
)
router.delete(
  '/api/supplier_orders/:id',
  supplier_orderController.deleteSupplier_order,
)

module.exports = router
