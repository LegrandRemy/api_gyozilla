'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'suppliers',
      [
        {
          contact_name: 'Bertrand DECOUPE',
          phone: '0612587963',
          email: 'decoupe@exemple.com',
          compagny: 'Le boucher du coin perdu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          contact_name: 'Jean JECUEILLE',
          phone: '0678369410',
          email: 'jeceuille@exemple.com',
          compagny: 'Les legumes du soleil de Picardie',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          contact_name: 'Marcel JAPAN',
          phone: '0641397426',
          email: 'japan@exemple.com',
          compagny: 'Tout pour les sushis',
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
