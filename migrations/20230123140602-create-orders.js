'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      payement_at: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      id_steps: {
        type: Sequelize.INTEGER
      },
      id_sales_revenues: {
        type: Sequelize.INTEGER
      },
      id_users: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};