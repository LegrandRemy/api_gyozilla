'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Stocks',
      [
        {
          id_franchises: 1,
          id_ingredients: 1,
          quantity: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_franchises: 2,
          id_ingredients: 2,
          quantity: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_franchises: 3,
          id_ingredients: 1,
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stocks', null, {})
  },
}
