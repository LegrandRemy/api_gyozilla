'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users_Meetings',
      [
        {
          id_users: 1,
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_users: 2,
          id_meetings: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_users: 2,
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users_Meetings', null, {})
  },
}
