'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Stocks_Suppliers',
      [
        {
          id_stock: 1,
          id_suppliers: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_stock: 2,
          id_suppliers: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_stock: 3,
          id_suppliers: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_stock: 4,
          id_suppliers: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stocks_Suppliers', null, {})
  },
}
