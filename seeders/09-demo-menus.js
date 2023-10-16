"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Menus",
      [
        {
          name: "Menu Enfant",
          price: 8,
          image: "menu/Menu-Enfant.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Menu Petit Prix",
          price: 12,
          image: "menu/Menu-Petit-Prix.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Menu Découverte",
          price: 18,
          image: "menu/Menu-Decouverte.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Menu Gourmand",
          price: 25,
          image: "menu/Menu-Gourmand.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Menus", null, {});
  },
};
