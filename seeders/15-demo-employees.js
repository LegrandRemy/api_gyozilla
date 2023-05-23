'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Employees',
      [
        {
          lastname: 'Rabbit',
          firstname: 'Roger',
          password: '$2a$10$ZsnkVypMltudrypwEWfzD.lqrxIMiAU0dd.H6.8lqf1S/oAXP.r06',
          email: 'rabbit.roger@gmail.com',
          phone: '0609080044',
          id_franchises: 1,
          id_roles: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Reeves',
          firstname: 'Keanu',
          password: '$2a$10$ZsnkVypMltudrypwEWfzD.lqrxIMiAU0dd.H6.8lqf1S/oAXP.r06',
          email: 'reeves.keanu@gmail.com',
          phone: '0609080045',
          id_franchises: 1,
          id_roles: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Blum',
          firstname: 'Léon',
          password: '$2a$10$ZsnkVypMltudrypwEWfzD.lqrxIMiAU0dd.H6.8lqf1S/oAXP.r06',
          email: 'blum.leon@gmail.com',
          phone: '0609080046',
          id_franchises: 2,
          id_roles: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {})
  },
}
