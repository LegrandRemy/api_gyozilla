/**
 * @swagger
 * components:
 *   schemas:
 *     news:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: ID de l'actualité
 *         name:
 *           type: string
 *           description: Nom de l'actualité
 *         image:
 *           type: string
 *           description: Image de l'actualité
 *         description:
 *           type: string
 *           description: Description de l'actualité
 *
 *       example:
 *         id: 1
 *         name: "Nouvelle ouverture chez Gyozilla"
 *         image: "news/1.jpg"
 *         description: "Venez découvrir tous nos savoureux plats"
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
 *     summary: Lister tous les actualités
 *     tags: [news]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de l'actualité
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Nom de l'actualité
 *       - in: query
 *         name: image
 *         schema:
 *           type: string
 *         required: false
 *         description: Image de l'actualité
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         required: false
 *         description: Description de l'actualité
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
 *         description: Actualité créé.
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
 *           type: string
 *         required: true
 *         description: Actualité par l'id
 *     responses:
 *       200:
 *         description: Actualité par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/news'
 *       404:
 *         description: L'actualité n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour de l'actualité par son id
 *    tags: [news]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
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
 *        description: L'actualité a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/news'
 *      404:
 *        description: L'actualité n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une actualité par son id
 *     tags: [news]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de l'actualité
 *
 *     responses:
 *       200:
 *         description: L'actualité a été supprimé.
 *       404:
 *         description: L'actualité n'a pas été trouvé.
 */

const express = require("express");
const router = express.Router();
const newController = require("../controllers/newsController");
const { verifyToken } = require("../controllers/tokenController");

router.get("/api/news", newController.getAllNews);
router.get("/api/news/:id", newController.getNew);
router.get("/api/lastnews/", newController.getLastThreeNews);

router.post("/api/news", verifyToken, newController.createNew);
router.patch("/api/news/:id", verifyToken, newController.updateNew);
router.delete("/api/news/:id", verifyToken, newController.deleteNew);

module.exports = router;
