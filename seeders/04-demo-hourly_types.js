'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Hourly_Types',
      [
        {
          name: 'Travail',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Congés',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Heures supplémentaires',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hourly_Types', null, {})
  },
}
