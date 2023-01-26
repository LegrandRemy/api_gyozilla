'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'measurement_units',
      [
        {
          label: 'Riz',
          price: 2,
          reference: 1,
          quantity: 50,
          id_ressources_types: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: 'Friteuse',
          price: 50,
          reference: 2,
          quantity: 200,
          id_ressources_types: 2,
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
