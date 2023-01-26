'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          type: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Director',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Manager',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Employed',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Customer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
