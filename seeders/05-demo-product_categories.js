'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductCategories',
      [
        {
          name: 'Burger',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chinois',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Japonnais',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Salade',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Surgeles',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductCategories', null, {})
  },
}
