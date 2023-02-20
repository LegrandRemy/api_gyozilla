'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products_Orders',
      [
        {
          id_products: 1,
          id_orders: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_products: 2,
          id_orders: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products_Orders', null, {})
  },
}
