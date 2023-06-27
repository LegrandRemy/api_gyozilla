'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          title: 'Promos',
          description: 'Des promos tout le mois de Mai',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Lolo',
          description: 'Elle est canon',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'La manu recrute',
          description: 'Des formations au top',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'La fête des tomates',
          description: 'Bien mûres, elles arrivent en abondance chez Gyozilla',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Gyozilla recrute!',
          description: 'On vous engage comme vous êtes, postulez!',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Halloween arrive!',
          description:
            "De nombreuses fêtes sont organisées tout au long de la pèriode d'halloween",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {})
  },
}
