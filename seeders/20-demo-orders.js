'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          payement_at: '2023-01-26 17:30:00',
          price: 20,
          id_status: 1,
          id_sales_revenues: 1,
          id_users: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payement_at: '2023-01-06 19:00:00',
          price: 30,
          id_status: 3,
          id_sales_revenues: 1,
          id_users: 2,
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
