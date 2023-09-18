"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProductCategories",
      [
        {
          name: "Entrées",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plats",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Desserts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boissons",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProductCategories", null, {});
  },
};
