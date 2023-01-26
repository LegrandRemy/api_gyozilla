'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'steps',
      [
        {
          step: '1. Cuire le riz, 2. ...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          step: '1. Plonger les nems dans la friteuse, 2. ...',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          step: '1. Laver la salade, 2. Couper les oignons, 3. ...',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          step: '1. Faire des boules de riz, 2. Poser le saumon dessus, 3. ...',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('steps', null, {})
  },
}

