"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "News",
      [
        {
          name: 'Nouvelle ouverture : "Découvrez Gyozilla, la fusion gourmande sino-japonaise !"',
          image: "news/1.webp",
          description:
            "Nous sommes heureux de vous annoncer l'ouverture tant attendue de Gyozilla ! Plongez dans un univers culinaire unique où la cuisine chinoise et japonaise se rencontrent pour vous offrir une expérience gustative inoubliable. Venez déguster nos plats savoureux et laissez-vous transporter dans un voyage gastronomique entre la Chine et le Japon.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Soirée spéciale "Sakura Matsuri" chez Gyozilla !',
          image: "news/2.webp",
          description:
            'Joignez-vous à nous pour célébrer la traditionnelle fête printanière "Sakura Matsuri" chez Gyozilla ! Plongez dans une ambiance festive et profitez de notre buffet à volonté mettant en vedette une sélection exquise de plats chinois et japonais. Laissez-vous émerveiller par la décoration inspirée des cerisiers en fleurs et savourez des saveurs authentiques.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nouveau plat signature : "Le Gyozilla Roll, un festival de saveurs enroulées !"',
          image: "news/3.webp",

          description:
            "Nous sommes ravis de vous présenter notre tout nouveau plat signature, le Gyozilla Roll. Ce rouleau délicieux et créatif est préparé avec des ingrédients frais soigneusement sélectionnés tels que le crabe royal, l'avocat crémeux et la sauce spéciale Gyozilla. Laissez-vous séduire par cette explosion de saveurs et offrez à vos papilles une expérience unique.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("News", null, {});
  },
};
