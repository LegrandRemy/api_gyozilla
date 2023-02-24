'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Customers',
      [
        {
          lastname: 'Rabbit',
          firstname: 'Roger',
          password: 'ilesttropfort',
          email: 'rabbit.roger@gmail.com',
          fidelitypoints: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Mouloud',
          firstname: 'Jean',
          password: 'ilesttropfort',
          email: 'jean.mouloud@gmail.com',
          fidelitypoints: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Legrand',
          firstname: 'Remy',
          password: 'ilesttropfort',
          email: 'legrand.remy@gmail.com',
          fidelitypoints: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {})
  },
}
