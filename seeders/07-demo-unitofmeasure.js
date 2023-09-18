"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UnitOfMeasures",
      [
        {
          label: "kg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: "pc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: "L",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UnitOfMeasures", null, {});
  },
};
