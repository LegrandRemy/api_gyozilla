/**
 * @swagger
 * components:
 *   schemas:
 *     product_ressources_receipts:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la recette
 *         label:
 *           type: string
 *           description: Nom de la recette
 *         reference:
 *           type: int
 *           description: Référence de la recette
 *         id_step:
 *           type: int
 *           description: ID de l'étape de recette
 *         id_products:
 *           type: int
 *           description: ID du produit associé
 *         id_ressources:
 *           type: int
 *           description: ID de l'ingrédient associé
 *
 *       example:
 *         id: 1
 *         label: Cheeseburger
 *         reference: 10675
 *         id_step: 7
 *         id_products: 5
 *         id_ressources: 5
 *
 */

/**
 * @swagger
 * tags:
 *   name: product_ressources_receipts
 *   description: API pour les recettes
 * /api/product_ressources_receipts:
 *   get:
 *     summary: Lister toutes les recettes
 *     tags: [product_ressources_receipts]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de la recette
 *       - in: query
 *         name: label
 *         schema:
 *           type: string
 *         required: false
 *         description: Nom de la recette
 *       - in: query
 *         name: reference
 *         schema:
 *           type: int
 *         required: false
 *         description: Référence de la recette
 *       - in: query
 *         name: id_step
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de l'étape de recette
 *       - in: query
 *         name: id_products
 *         schema:
 *           type: int
 *         required: false
 *         description: ID du produit associé
 *       - in: query
 *         name: id_ressources
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de l'ingrédient associé
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les recettes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product_ressources_receipts'
 *   post:
 *     summary: Créer une nouvelle recette
 *     tags: [product_ressources_receipts]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/product_ressources_receipts'
 *     responses:
 *       200:
 *         description: La recette a été créée'.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product_ressources_receipts'
 *       404:
 *         description: Une erreur est survenue.
 * /api/product_ressources_receipts/{id}:
 *   get:
 *     summary: Récupérer la recette par l'id
 *     tags: [product_ressources_receipts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Recette par l'id
 *     responses:
 *       200:
 *         description: Recette par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product_ressources_receipts'
 *       404:
 *         description: La recette n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de la recette par son id
 *    tags: [product_ressources_receipts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id de la recette
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/product_ressources_receipts'
 *    responses:
 *      200:
 *        description: La recette a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product_ressources_receipts'
 *      404:
 *        description: La recette n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une recette par son id
 *     tags: [product_ressources_receipts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id de la recette
 *
 *     responses:
 *       200:
 *         description: La recette a été supprimée.
 *       404:
 *         description: La recette n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const product_ressourceController = require('../controllers/product_ressources_receiptsController')

router.get(
  '/api/product_ressources_receipts',
  product_ressourceController.getAllproduct_ressources_receipts,
)
router.get(
  '/api/product_ressources_receipts/:id',
  product_ressourceController.getProduct_ressource,
)
router.post(
  '/api/product_ressources_receipts',
  product_ressourceController.createProduct_ressource,
)
router.put(
  '/api/product_ressources_receipts/:id',
  product_ressourceController.updateProduct_ressource,
)
router.delete(
  '/api/product_ressources_receipts/:id',
  product_ressourceController.deleteProduct_ressource,
)

module.exports = router
