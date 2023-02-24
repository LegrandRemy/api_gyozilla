'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
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
      phone: {
        type: Sequelize.STRING(15),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(160),
      },
      id_roles: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_franchises: {
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
    await queryInterface.dropTable('Employees')
  },
}
