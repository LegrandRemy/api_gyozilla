/**
 * @swagger
 * components:
 *   schemas:
 *     categories:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la catégorie
 *         name:
 *           type: string
 *           description: Nom de la catégorie
 *       example:
 *         id: 1
 *         name: Boissons
 */

/**
 * @swagger
 * tags:
 *   name: categories
 *   description: API pour les catégories
 * /api/categories:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister toutes les catégories
 *     tags: [categories]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la catégorie
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de la catégorie
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les catégories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/categories'
 *   post:
 *     summary: Créer une nouvelle catégorie
 *     tags: [categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/categories'
 *     responses:
 *       200:
 *         description: La catégorie créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categories'
 *       404:
 *         description: Une erreur est survenue.
 * /api/categories/{id}:
 *   get:
 *     summary: Récupérer la catégorie par l'id
 *     tags: [categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Catégorie par l'id
 *     responses:
 *       200:
 *         description: Catégorie par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categories'
 *       404:
 *         description: La catégorie n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de la catégorie par son id
 *    tags: [categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de la catégorie
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/categories'
 *    responses:
 *      200:
 *        description: La catégorie a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/categories'
 *      404:
 *        description: La catégorie n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une catégorie par son id
 *     tags: [categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la catégorie
 *
 *     responses:
 *       200:
 *         description: La catégorie a été supprimée.
 *       404:
 *         description: La catégorie n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoriesController')

router.get('/api/categories', categoryController.getAllCategories)
router.get('/api/categories/:id', categoryController.getCategory)
router.post('/api/categories', categoryController.createCategory)
router.put('/api/categories/:id', categoryController.updateCategory)
router.delete('/api/categories/:id', categoryController.deleteCategory)

module.exports = router
