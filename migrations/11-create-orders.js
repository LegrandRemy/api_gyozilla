"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_customers: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_franchises: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      date_order: {
        type: Sequelize.DATE,
      },
      total_price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_status: {
        type: Sequelize.INTEGER,
      },
      id_order_types: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
