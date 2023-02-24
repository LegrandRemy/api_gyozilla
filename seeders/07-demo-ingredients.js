'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Ingredients',
      [
        {
          name: 'Salade',
          quantity: 10,
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tomate',
          quantity: 5,
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Oignons',
          quantity: 8,
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Steack',
          quantity: 2,
          purchasePrice: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Saucisse',
          quantity: 40,
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
