'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          lastname: 'Rabbit',
          firstname: 'Roger',
          password: 'ilesttropfort',
          email: 'rabbit.roger@gmail.com',
          phone: '0609080042',
          address: '129 rue du Verger',
          zipcode: '80000',
          city: 'Amiens',
          hiring_date: '2023-01-26 17:00:00',
          salary: 1700,
          fidelitypoints: 0,
          id_contract_types: 2,
          id_roles: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Reeves',
          firstname: 'Keanu',
          password: 'ilesttropfort',
          email: 'reeves.keanu@gmail.com',
          phone: '0609080045',
          address: '5 allée de la poupée de cire',
          zipcode: '80330',
          city: 'Longueau',
          hiring_date: '2023-01-26 17:00:00',
          salary: 1700,
          fidelitypoints: 0,
          id_contract_types: 2,
          id_roles: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Blum',
          firstname: 'Léon',
          password: 'ilesttropfort',
          email: 'blum.leon@gmail.com',
          phone: '0609080043',
          address: '125 rue du Verger',
          zipcode: '80000',
          city: 'Amiens',
          hiring_date: null,
          salary: 0,
          fidelitypoints: 100,
          id_contract_types: 1,
          id_roles: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
