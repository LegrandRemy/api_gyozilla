'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Menus',
      [
        {
          name: 'Menu Enfant',
          price: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Menu Petit Prix',
          price: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Menu Découverte',
          price: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Menu Gourmand',
          price: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Menus', null, {})
  },
}
