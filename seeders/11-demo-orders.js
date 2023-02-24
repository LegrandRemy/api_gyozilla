'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          id_customers: 1,
          id_franchises: 1,
          date_order: '2023-02-01',
          total_price: 50,
          id_status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_customers: 2,
          id_orders: 2,
          date_order: '2023-02-31',
          total_price: 30,
          id_status: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {})
  },
}
