'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '2',
          lastname: 'Lev',
          firstname: 'Marcus',
          email: 'test@example.com',
          phone: '0627662711',
          adress: '69 Rue de la poupée qui tousse',
          zipcode: '80260',
          city: 'Le Puy Sans Fond',
          hiring_date: new Date(),
          salary: 1,
          id_contract_types: 2,
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
