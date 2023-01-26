'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'sales_revenues',
      [
        {
          ca: 20000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ca: 18560,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ca: 45263,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ca: 1245,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_revenues', null, {})
  },
}

