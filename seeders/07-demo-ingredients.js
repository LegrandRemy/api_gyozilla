'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Ingredients',
      [
        {
          name: 'Salade',
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tomate',
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Oignons',
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Steack',
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Saucisse',
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ingredients', null, {})
  },
}
