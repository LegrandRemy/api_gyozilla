/**
 * @swagger
 * components:
 *   schemas:
 *     customers:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: ID du client
 *         lastname:
 *           type: string
 *           description: Nom du client
 *         firstname:
 *           type: string
 *           description: Prénom du client
 *         email:
 *           type: string
 *           description: Email du client
 *         password:
 *           type: string
 *           description: Mdp du client
 *         fidelityPoints:
 *           type: string
 *           description: Points de fidélité du client
 *       example:
 *         id: 1
 *         lastname: Robert
 *         firstname: Jean
 *         email: robert.jean@gmail.com
 *         password: abc123456
 *         fidelitypoints: 50
 */

/**
 * @swagger
 * tags:
 *   name: customers
 *   description: API pour les clients
 * /api/customers:
 *   get:
 *     summary: Lister tous les clients
 *     tags: [customers]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du client
 *       - in: query
 *         name: lastname
 *         schema:
 *           type: string
 *         required: false
 *         description: nom du client
 *       - in: query
 *         name: firstname
 *         schema:
 *           type: string
 *         required: false
 *         description: prénom du client
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Email du client
 *       - in: query
 *         name: fidelitypoints
 *         schema:
 *           type: string
 *         required: false
 *         description: Points de fidélité du client
 *     responses:
 *       200:
 *         description: La liste de tous les clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/customers'
 *   post:
 *     summary: Créer un nouveau client
 *     tags: [customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/customers'
 *     responses:
 *       200:
 *         description: Le client a été créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customers'
 *       404:
 *         description: Une erreur est survenue.
 * /api/customers/{id}:
 *   get:
 *     summary: Récupérer le client par l'id
 *     tags: [customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Le client par l'id
 *     responses:
 *       200:
 *         description: Le client par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customers'
 *       404:
 *         description: Le client n'a pas été trouvé
 *   patch:
 *    summary: Mise à jour du client par son id
 *    tags: [customers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: false
 *        description: id du client
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/customers'
 *    responses:
 *      200:
 *        description: Le client a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/customers'
 *      404:
 *        description: Le client n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un client par son id
 *     tags: [customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du client
 *     responses:
 *       200:
 *         description: Le client a été supprimé.
 *       404:
 *         description: Le client n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/customers/', verifyToken, customerController.getAllCustomers)
router.get('/api/customers/:id', verifyToken, customerController.getCustomer)
router.post('/api/customers/', verifyToken, customerController.createCustomer)
router.patch(
  '/api/customers/:id',
  verifyToken,
  customerController.updateCustomer,
)
router.delete(
  '/api/customers/:id',
  verifyToken,
  customerController.deleteCustomer,
)

module.exports = router
