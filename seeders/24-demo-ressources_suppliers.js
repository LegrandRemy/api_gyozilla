'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Ressources_Suppliers',
      [
        {
          id_ressources: 1,
          id_suppliers: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_ressources: 2,
          id_suppliers: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_ressources: 3,
          id_suppliers: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_ressources: 4,
          id_suppliers: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ressources_Suppliers', null, {})
  },
}
