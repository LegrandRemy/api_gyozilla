'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          lastname: 'Legrand',
          firstname: 'Toto',
          email: 'toto@lamanu.com',
          phone: '0669785412',
          adress: '69 Rue de la biere brassee',
          zipcode: '80260',
          city: 'Chez Wam',
          hiring_date: new Date(),
          salary: '4500',
          fidelitypoints: '287',
          id_contract_types: null,
          id_roles: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastname: 'Pliant',
          firstname: 'Martine',
          email: 'demo@demo.com',
          phone: '0612345678',
          adress: '18 Rue de la barbie qui pleure',
          zipcode: '80660',
          city: 'Le moulin a poivre',
          hiring_date: new Date(),
          salary: '1800',
          fidelitypoints: '26',
          id_contract_types: null,
          id_roles: null,
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
