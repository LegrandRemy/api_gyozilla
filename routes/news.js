/**
 * @swagger
 * components:
 *   schemas:
 *     news:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de l'actualité
 *         title:
 *           type: string
 *           description: Libellé de l'actualité
 *         description:
 *           type: string
 *           description: Description de l'actualité
 *         image:
 *           type: string
 *           description: Image de l'actualité
 *
 *       example:
 *         id: 1
 *         title: Promos du printemps
 *         description: Durant tout le mois d'Avril, tous nos produits sont à moitié prix, ne le manquez pas!!!!
 *         image: 1.jpg
 *
 */

/**
 * @swagger
 * tags:
 *   name: news
 *   description: API pour les actualités
 * /api/news:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister toutes les actualités
 *     tags: [news]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: ID de l'actualité
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: Titre de l'actualité
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         required: true
 *         description: Contenu de l'actualité
 *       - in: query
 *         name: image
 *         schema:
 *           type: string
 *         required: false
 *         description: Image de l'actualité
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les actualités
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/news'
 *   post:
 *     summary: Créer une nouvelle actualité
 *     tags: [news]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/news'
 *     responses:
 *       200:
 *         description: actualité créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/news'
 *       404:
 *         description: Une erreur est survenue.
 * /api/news/{id}:
 *   get:
 *     summary: Récupérer l'actualité par l'id
 *     tags: [news]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: actualité par l'id
 *     responses:
 *       200:
 *         description: L'actualité a été trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/news'
 *       404:
 *         description: L'actualité n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour du actualité par son id
 *    tags: [news]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id de l'actualité
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/news'
 *    responses:
 *      200:
 *        description: L'actualité a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/news'
 *      404:
 *        description: L'actualité n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une actualité par son id
 *     tags: [news]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id de l'actualité
 *
 *     responses:
 *       200:
 *         description: L'actualité a été supprimée.
 *       404:
 *         description: L'actualité n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const newController = require('../controllers/newsController')
const { verifyToken } = require('../controllers/tokenController')
const {
  storage,
  fileSizeFilter,
  fileTypeFilter,
} = require('../middlewares/upload')
const multer = require('multer')

const upload = multer({
  storage: storage,
  fileSizer: fileSizeFilter,
  fileType: fileTypeFilter,
})

router.get('/api/news', newController.getAllNews)
router.get('/api/news/:id', newController.getNew)
router.post(
  '/api/news',
  verifyToken,
  upload.single('image'),
  newController.createNew,
)
router.patch('/api/news/:id', verifyToken, newController.updateNew)
router.delete('/api/news/:id', verifyToken, newController.deleteNew)

module.exports = router
