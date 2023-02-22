'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stock', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      label: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      reference: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      id_stock_types: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stocks_Types',
          key: 'id',
        },
      },
      id_measurement_units: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Measurement_Units',
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
    await queryInterface.dropTable('Stock')
  },
}
