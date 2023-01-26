'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hourlies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      start: {
        type: Sequelize.DATE,
      },
      end: {
        type: Sequelize.DATE,
      },
      id_hourly_types: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Hourly_types',
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
    await queryInterface.dropTable('Hourlies')
  },
}
