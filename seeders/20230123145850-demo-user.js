'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          lastname: 'Legrand',
          firstname: 'Rémy',
          password: 'ilesttropfort',
          email: 'example@example.com',
          phone: '0627662711',
          adress: '69 Rue de la poupée qui tousse',
          zipcode: '80260',
          city: 'Le Puy Sans Fond',
          hiring_date: new Date(),
          salary: 1,
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
