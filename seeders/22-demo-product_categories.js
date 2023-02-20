'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Product_Categories',
      [
        {
          id_products: 1,
          id_categories: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_products: 2,
          id_categories: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_Categories', null, {})
  },
}
