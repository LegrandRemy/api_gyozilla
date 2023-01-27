'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ressources',
      [
        {
          label: 'Riz',
          price: 1,
          reference: 'MB500XF480',
          quantity: 50,
          id_ressources_types: 1,
          id_measurement_units: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: 'Friteuse',
          price: 80,
          reference: 'MB500XF490',
          quantity: 4,
          id_ressources_types: 2,
          id_measurement_units: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: 'Nem',
          price: 2,
          reference: 'MB500XF500',
          quantity: 100,
          id_ressources_types: 1,
          id_measurement_units: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: 'Frigo',
          price: 200,
          reference: 'MB500XF510',
          quantity: 3,
          id_ressources_types: 2,
          id_measurement_units: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: 'Coca',
          price: 5,
          reference: 'MB500XF869',
          quantity: 3,
          id_ressources_types: 1,
          id_measurement_units: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ressources', null, {})
  },
}
