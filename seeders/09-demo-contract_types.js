'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Contract_Types',
      [
        {
          type: 'Client',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'CDI',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'CDD',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Interim',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contract_Types', null, {})
  },
}
