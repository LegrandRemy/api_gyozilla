'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Nem',
          description: 'les nems sont de petits aliment aux boeufs, porc....',
          image: null,
          price: 3,
          creation_steps: '1. Plonger les nems dans la friteuse, 2. ...',
          id_product_categories: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Porc laqué',
          description: "c'est du cochon",
          image: null,
          price: 18,
          creation_steps: '1. Couper le porc, 2. Couper les oignons, 3. ...',
          id_product_categories: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hamburger',
          description: "Nous c'est le gout....",
          image: null,
          price: 8,
          creation_steps: '1. Couper le pain, 2. Couper les oignons, 3. ...',
          id_product_categories: 1,
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
