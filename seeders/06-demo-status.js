"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Status",
      [
        {
          name: "Paiement en attente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Payé",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "En cours de préparation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Préparé",
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
