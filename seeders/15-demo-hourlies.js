'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Hourlies',
      [
        {
          start: '2023-01-26 08:00:00',
          end: '2023-01-26 17:00:00',
          id_hourly_types: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start: '2023-01-26 08:00:00',
          end: '2023-01-29 08:00:00',
          id_hourly_types: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hourlies', null, {})
  },
}
