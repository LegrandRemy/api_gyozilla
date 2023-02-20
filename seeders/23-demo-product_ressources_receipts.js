'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Product_Ressources_Receipts',
      [
        {
          id_products: 1,
          id_ressources: 1,
          id_step: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_products: 2,
          id_ressources: 1,
          id_step: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_Ressources_Receipts', null, {})
  },
}
