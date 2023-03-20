/**
 * @swagger
 * components:
 *   schemas:
 *     deliveries:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la livraison
 *         id_suppliers_orders:
 *           type: int
 *           description: Id de la commande du fournisseur
 *         delivery_date:
 *           type: string
 *           description: Date de livraison
 *         carrier_name:
 *           type: string
 *           description: Nom du transporteur
 *       example:
 *         id: 1
 *         id_suppliers_order: 1
 *         delivery_date: "2023-02-20"
 *         carrier_name: "transport ducobu"
 */

/**
 * @swagger
 * tags:
 *   name: deliveries
 *   description: API pour les livraisons
 * /api/deliveries:
 *   get:
 *     summary: Lister toutes les livraisons
 *     tags: [deliveries]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du client
 *       - in: query
 *         name: id_suppliers_orders
 *         schema:
 *           type: string
 *         required: false
 *         description: id de la commande fournisseur
 *       - in: query
 *         name: delivery_date
 *         schema:
 *           type: string
 *         required: false
 *         description: date de livraison
 *       - in: query
 *         name: carrier_name
 *         schema:
 *           type: string
 *         required: false
 *         description: Nom du transporteur
 *     responses:
 *       200:
 *         description: La liste de toutes les livraisons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/deliveries'
 *   post:
 *     summary: Créer une nouvelle livraison
 *     tags: [deliveries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/deliveries'
 *     responses:
 *       200:
 *         description: La livraison a été créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/deliveries'
 *       404:
 *         description: Une erreur est survenue.
 * /api/deliveries/{id}:
 *   get:
 *     summary: Récupérer la livraison par l'id
 *     tags: [deliveries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: La livraison par l'id
 *     responses:
 *       200:
 *         description: La livraison par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/deliveries'
 *       404:
 *         description: La livraison n'a pas été trouvé
 *   patch:
 *    summary: Mise à jour de la livraison par son id
 *    tags: [deliveries]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: false
 *        description: id de la livraison
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/deliveries'
 *    responses:
 *      200:
 *        description: La livraison a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/deliveries'
 *      404:
 *        description: La livraison n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une livraison par son id
 *     tags: [deliveries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *         description: id de la livraison
 *     responses:
 *       200:
 *         description: La livraison a été supprimée.
 *       404:
 *         description: La livraison n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const deliveriesController = require('../controllers/deliveriesController')
const { verifyToken } = require('../controllers/tokenController')

router.get(
  '/api/deliveries/',
  verifyToken,
  deliveriesController.getAllDeliveries,
)
router.get(
  '/api/deliveries/:id',
  verifyToken,
  deliveriesController.getDeliveries,
)
router.post(
  '/api/deliveries/',
  verifyToken,
  deliveriesController.createDeliveries,
)
router.patch(
  '/api/deliveries/:id',
  verifyToken,
  deliveriesController.updateDeliveries,
)
router.delete(
  '/api/deliveries/:id',
  verifyToken,
  deliveriesController.deleteDeliveries,
)

module.exports = router
