'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(50),
      },
      description: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING(100),
      },
      price: {
        type: Sequelize.FLOAT(6, 2),
      },
      creation_steps: {
        type: Sequelize.TEXT,
      },
      id_product_categories: {
        type: Sequelize.INTEGER,
      },
      id_menus: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products')
  },
}
