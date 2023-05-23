'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Menus',
      [
        {
          name: 'Menu Enfant',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Menu Petit Prix',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Menu Découverte',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Menu Gourmand',
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
