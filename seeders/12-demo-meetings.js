'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'meetings',
      [
        {
          end_hour: '2023-01-26 09:00:00',
          start_hour: '2023-01-26 10:00:00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          end_hour: '2023-01-26 14:00:00',
          start_hour: '2023-01-26 15:00:00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          end_hour: '2023-01-27 10:00:00',
          start_hour: '2023-01-27 12:00:00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meetings', null, {})
  },
}
