'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'suppliers',
      [
        {
          contact_name: 'Jean Mouloud',
          adress: '666 Rue de la lave en fusion',
          phone: '0627662711',
          email: 'eldiablo@jelivre.com',
          compagny: 'Les producteurs du centre de la terre',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suppliers', null, {})
  },
}
