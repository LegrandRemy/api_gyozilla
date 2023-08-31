"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UnitOfMeasures",
      [
        {
          label: "kg",
        },
        {
          label: "g",
        },
        {
          label: "pc",
        },
        {
          label: "L",
        },
        {
          label: "ml",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UnitOfMeasures", null, {});
  },
};
