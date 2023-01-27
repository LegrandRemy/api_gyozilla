'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'roles',
      [
        {
          type: 'Client',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Préparateur de commande',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Livreur',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Cuisinier',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Manager',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Gérant',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {})
  },
}
