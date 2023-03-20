'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'SupplierOrders',
      [
        {
          date_order: new Date('2023-02-29'),
          total_price: 30,
          id_suppliers: 1,
          id_franchises: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_order: new Date('2023-02-29'),
          total_price: 10,
          id_suppliers: 2,
          id_franchises: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_order: new Date('2023-02-29'),
          total_price: 50,
          id_suppliers: 3,
          id_franchises: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SupplierOrders', null, {})
  },
}
