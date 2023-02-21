"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Status",
      [
        {
          name: "En cours",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paiement en attente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Livré",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Status", null, {});
  },
};
