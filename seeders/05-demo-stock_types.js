'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Stocks_Types',
      [
        {
          type: 'Alimentaire',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Materiel',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stocks_Types', null, {})
  },
}
