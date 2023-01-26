'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'measurement_units',
      [
        {
          unity: 'T',
          id_ressources: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unity: 'kg',
          id_ressources: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('measurement_units', null, {})
  },
}
