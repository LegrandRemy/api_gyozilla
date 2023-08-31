"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Suppliers",
      [
        {
          name: "Bertrand DECOUPE",
          address: "10 rue de la poupee qui tousse",
          phone: "0612587963",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jean JECUEILLE",
          address: "50 rue du fond perdu",
          phone: "0678369410",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marcel JAPAN",
          address: "69 avenue du ruban rose",
          phone: "0641397426",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Suppliers", null, {});
  },
};
