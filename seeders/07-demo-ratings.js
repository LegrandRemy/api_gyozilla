'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ratings',
      [
        {
          note: '5',
          comment: 'Très très bon, je reviendrai vite',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          note: '3',
          comment: 'Bon mais j\'ai connu mieux',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          note: '1',
          comment: 'Bof, pas très bon',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          note: '0',
          comment: 'Très mediocre, ...',
          id_meetings: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ratings', null, {})
  },
}

