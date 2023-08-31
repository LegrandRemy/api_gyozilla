"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UnitOfMeasures", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    label: {
        type: Sequelize.STRING(50),
    },
    });
},
async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UnitOfMeasures");
},
};
