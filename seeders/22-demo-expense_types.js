"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ExpenseTypes",
      [
        {
          name: "Employé",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Matériel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Produit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Location",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ExpenseTypes", null, {});
  },
};
