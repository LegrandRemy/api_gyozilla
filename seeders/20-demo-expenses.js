'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Expenses',
      [
        {
          name: "Salaire brut de Rabit Roger",
          id_expense_types: 1,
          amount: 1700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salaire brut de Keanu Reeves",
          id_expense_types: 1,
          amount: 1900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salaire brut de Léon Blum",
          id_expense_types: 1,
          amount: 2500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salaire brut de Leonardo Dicaprio",
          id_expense_types: 1,
          amount: 3500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Friteuse",
          id_expense_types: 2,
          amount: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Réfrigérateur",
          id_expense_types: 2,
          amount: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Congélateur",
          id_expense_types: 2,
          amount: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gazinière",
          id_expense_types: 2,
          amount: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gazinière",
          id_expense_types: 3,
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },










        {
          name: "Loyer batiment",
          id_expense_types: 4,
          amount: 2000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Expenses', null, {})
  },
}
