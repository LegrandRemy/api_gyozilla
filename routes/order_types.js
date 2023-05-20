/**
 * @swagger
 * components:
 *   schemas:
 *     order_types:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID
 *         name:
 *           type: string
 *           description: Nom du type de commande
 *       example:
 *         id: 1
 *         name: Click & Collect
 */


/**
 * @swagger
 * tags:
 *   name: order_types
 *   description: API pour les types de commandes
 * /api/order_types:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister tous les types de commande
 *     tags: [order_types]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Nom du type de commande
 *     responses:
 *       200:
 *         description: La liste de tous les types de commande
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/order_types'
 *   post:
 *     summary: Créer un nouveau type de commande
 *     tags: [order_types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order_types'
 *     responses:
 *       200:
 *         description: Type de commande créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order_types'
 *       404:
 *         description: Une erreur est survenue.
 * /api/order_types/{id}:
 *   get:
 *     summary: Récupérer le type de commande par l'id
 *     tags: [order_types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Type de commmande par l'id
 *     responses:
 *       200:
 *         description: Type de commmande par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order_types'
 *       404:
 *         description: Le type de commande n'a pas été trouvé.
 *   delete:
 *     summary: Supprimer un type de commande par son id
 *     tags: [order_types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id du type de commande
 *
 *     responses:
 *       200:
 *         description: Le type de commande a été supprimé.
 *       404:
 *         description: Le type de commande n'a pas été trouvé.
 */


const express = require('express')
const router = express.Router()
const orderTypesController = require('../controllers/orderTypesController')
const { verifyToken } = require('../controllers/tokenController')

router.get(
  '/api/order_types',
  orderTypesController.getAllOrderTypes,
)
router.get(
  '/api/order_types/:id',
  orderTypesController.getOrderType,
)
router.post(
  '/api/order_types',
  verifyToken,
  orderTypesController.createOrderType,
)
router.delete(
  '/api/order_types/:id',
  verifyToken,
  orderTypesController.deleteOrderType,
)

module.exports = router
