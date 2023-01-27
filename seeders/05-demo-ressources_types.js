'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ressources_types',
      [
        {
          type: 'Alimentaire',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Materiel',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ressources_types', null, {})
  },
}

