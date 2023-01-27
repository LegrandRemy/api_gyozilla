/**
 * @swagger
 * components:
 *   schemas:
 *     suppliers:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID du fournisseur
 *         contact_name:
 *           type: string
 *           description: Nom du fournisseur
 *         phone:
 *           type: string
 *           description: Numéro de téléphone du fournisseur
 *         email:
 *           type: string
 *           description: Email du fournisseur
 *         compagny:
 *           type: string
 *           description: Nom de la société
 *       example:
 *         id: 1
 *         contact_name: Robert
 *         phone: 0600000000
 *         email: robert.jean@gmail.com
 *         compagny: les resto du coeur
 */

/**
 * @swagger
 * tags:
 *   name: suppliers
 *   description: API pour les fournisseurs
 * /api/suppliers:
 *   get:
 *     summary: Liste tous les fournisseurs
 *     tags: [suppliers]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du fournisseur
 *       - in: query
 *         name: contact_name
 *         schema:
 *           type: string
 *         required: false
 *         description: nom du contact du fournisseur
 *       - in: query
 *         name: phone
 *         schema:
 *           type: string
 *         required: false
 *         description: Téléphone du fournisseur
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Email du fournisseur
 *       - in: query
 *         name: compagny
 *         schema:
 *           type: string
 *         required: false
 *         description: Nom du fournisseur
 *     responses:
 *       200:
 *         description: La liste de tous les fournisseurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/suppliers'
 *   post:
 *     summary: Créer un nouveau fournisseur
 *     tags: [suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/suppliers'
 *     responses:
 *       200:
 *         description: Le fournisseur créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/suppliers'
 *       500:
 *         description: Une erreur est survenue.
 * /api/suppliers/{id}:
 *   get:
 *     summary: Récupérer le fournisseur par l'id
 *     tags: [suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Fournisseur par l'id
 *     responses:
 *       200:
 *         description: Fournisseur par l'id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/suppliers'
 *       404:
 *         description: Le fournisseur n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour du fournisseur par son id
 *    tags: [suppliers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id du fournisseur
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/suppliers'
 *    responses:
 *      200:
 *        description: Le fournisseur a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/suppliers'
 *      404:
 *        description: Le fournisseur n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un fournisseur par son id
 *     tags: [suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id du fournisseur
 *     responses:
 *       200:
 *         description: Le fournisseur a été supprimé.
 *       404:
 *         description: Le fournisseur n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const suppliersController = require('../controllers/suppliersController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/suppliers', verifyToken, suppliersController.getAllSuppliers)
router.get('/api/suppliers/:id', verifyToken, suppliersController.getSupplier)
router.post('/api/suppliers', verifyToken, suppliersController.createSupplier)
router.patch(
  '/api/suppliers/:id',
  verifyToken,
  suppliersController.updateSupplier,
)
router.delete(
  '/api/suppliers/:id',
  verifyToken,
  suppliersController.deleteSupplier,
)

module.exports = router
