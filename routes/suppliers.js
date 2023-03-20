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
 *         name:
 *           type: string
 *           description: Nom du fournisseur
 *         phone:
 *           type: string
 *           description: Numéro de téléphone du fournisseur
 *         address:
 *           type: string
 *           description: Adresse du fournisseur
 *       example:
 *         id: 1
 *         name: "les resto du coeur"
 *         address: "10 rue de la poupee qui tousse 80000 Amiens"
 *         phone: "0600000000"
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
 *         name: name
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
 *         name: address
 *         schema:
 *           type: string
 *         required: false
 *         description: Adresse du fournisseur
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
 *           type: string
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
 *        required: false
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
 *           type: string
 *         required: false
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
