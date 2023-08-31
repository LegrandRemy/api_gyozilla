"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Hirings",
      [
        {
          name: "Cuisinier (H/F)",
          city: "70 rue des Jacobins 80000 Amiens",
          description:
            "En tant que cuisinier, vous serez responsable de la préparation des repas conformément à nos recettes standard. Vous devrez garantir la qualité et la consistance de nos plats tout en respectant les règles d'hygiène et de sécurité alimentaire. Une expérience préalable en cuisine, en particulier avec la cuisine chinoise, serait un plus.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Préparateur de commandes (H/F)",
          city: "70 rue des Jacobins 80000 Amiens",
          description:
            "En tant que préparateur de commandes, votre rôle principal sera de préparer les commandes des clients en veillant à ce que chaque commande soit correcte, complète et prête à être servie ou livrée à temps. Vous devez être organisé, capable de travailler rapidement et précisément, et avoir une bonne connaissance de nos produits.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Manager (H/F)",
          city: "70 rue des Jacobins 80000 Amiens",
          description:
            "En tant que manager, vous serez responsable de la supervision des opérations quotidiennes du restaurant, y compris la gestion du personnel, la résolution des problèmes des clients, le suivi des stocks et la garantie de la qualité des services. Vous devez avoir d'excellentes compétences en leadership, une expérience préalable en gestion de restaurant et une passion pour fournir un excellent service à la clientèle.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Hirings", null, {});
  },
};
