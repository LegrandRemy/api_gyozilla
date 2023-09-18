"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "OrderLines",
      [
        {
          quantity: 6,
          id_orders: 1,
          id_products: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 3,
          id_orders: 2,
          id_products: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 5,
          id_orders: 2,
          id_products: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderLines", null, {});
  },
};
