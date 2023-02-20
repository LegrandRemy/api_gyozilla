'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          label: 'Nem',
          price: 3,
          reference: 'MB500XF380',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          label: 'Porc laqué',
          price: 12,
          reference: 'MB500XF390',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  },
}
