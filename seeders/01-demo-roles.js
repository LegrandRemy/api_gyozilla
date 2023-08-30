"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "Préparateur de commande",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cuisinier",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Manager",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gérant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
