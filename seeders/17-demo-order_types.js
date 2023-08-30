"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "OrderTypes",
      [
        {
          name: "Click & Collect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Livraison à domicile",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Consommation sur place",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderTypes", null, {});
  },
};
