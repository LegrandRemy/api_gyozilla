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
          password:
            '$2a$10$ZsnkVypMltudrypwEWfzD.lqrxIMiAU0dd.H6.8lqf1S/oAXP.r06',
          email: 'rabbit.roger@gmail.com',
          fidelityPoints: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Mouloud',
          firstname: 'Jean',
          password:
            '$2a$10$ZsnkVypMltudrypwEWfzD.lqrxIMiAU0dd.H6.8lqf1S/oAXP.r06',
          email: 'jean.mouloud@gmail.com',
          fidelityPoints: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Legrand',
          firstname: 'Remy',
          password:
            '$2a$10$ZsnkVypMltudrypwEWfzD.lqrxIMiAU0dd.H6.8lqf1S/oAXP.r06',
          email: 'legrand.remy@gmail.com',
          fidelityPoints: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Lev',
          firstname: 'Cus',
          password: '$2a$10$ZsnkVypMltudrypwEWfzD.lqrxIMiAU0dd.H6.8lqf1S/oAXP.r06',
          email: 'test@test.fr',
          fidelityPoints: 1000,
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
