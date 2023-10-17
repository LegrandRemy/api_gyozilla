"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Ratings",
      [
        {
          id_customers: 1,
          id_products: 1,
          note: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_customers: 2,
          id_products: 1,
          note: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_customers: 3,
          id_products: 2,
          note: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_customers: 2,
          id_products: 2,
          note: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Ratings", null, {});
  },
};
