'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Ressources_Types',
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
    await queryInterface.bulkDelete('Ressources_Types', null, {})
  },
}
