'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Stocks_Receipts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_products: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      id_stock: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stock',
          key: 'id',
        },
      },
      id_step: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Steps',
          key: 'id',
        },
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
    await queryInterface.dropTable('Product_Stocks_Receipts')
  },
}
