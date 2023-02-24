'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SupplierOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date_order: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      id_suppliers: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_franchises: {
        allowNull: false,
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
    await queryInterface.dropTable('SupplierOrders')
  },
}
