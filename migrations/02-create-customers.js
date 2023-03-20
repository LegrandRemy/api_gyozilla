'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lastname: {
        type: Sequelize.STRING(50),
      },
      firstname: {
        type: Sequelize.STRING(50),
      },
      email: {
        type: Sequelize.STRING(100),
      },
      password: {
        type: Sequelize.STRING(160),
      },
      fidelityPoints: {
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
    await queryInterface.dropTable('Customers')
  },
}
