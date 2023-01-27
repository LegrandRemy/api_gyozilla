'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'measurement_units',
      [
        {
          unity: 'g',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unity: 'Kg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unity: 'L',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unity: 'pièce',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unity: 'canette',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unity: 'bouteille',
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
