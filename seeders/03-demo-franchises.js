'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Franchises',
      [
        {
          name: 'Gyozilla Amiens',
          address: '70 rue des Jacobins',
          phone: '0601020304',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gyozilla Longueau',
          address: '71 rue des Jacobins',
          phone: '0601020305',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gyozilla Glisy',
          address: '72 rue des Jacobins',
          phone: '0601020306',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Franchises', null, {})
  },
}
