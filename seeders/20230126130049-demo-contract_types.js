'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'contract_types',
      [
        {
          type: 'Client',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'CDI',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'CDD',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Interim',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contract_types', null, {})
  },
}
