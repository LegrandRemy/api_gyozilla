'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'suppliers',
      [
        {
          contact_name: 'Christian Leveque',
          phone: '0613697458',
          email: 'maroillesauxolives@jesouhainte.com',
          compagny: 'Les fromagers du terroir',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          contact_name: 'Bertrand Dumont',
          phone: '0678632158',
          email: 'lavachealait@jelivre.com',
          compagny: 'La vache a lait',
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
