"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Franchises",
      [
        {
          name: "Gyozilla Amiens",
          address: "70 rue des Jacobins 80000 Amiens",
          phone: "0601020304",
          geography: "49.890514, 2.3017172",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gyozilla Longueau",
          address: "18 Avenue de l'Arc 80440 Glisy",
          phone: "0601020305",
          geography: "49.8776, 2.398",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gyozilla Rivery",
          address: "113 Rue Thuillier Delambre 80136 Rivery",
          phone: "0601020306",
          geography: "49.9020353, 2.3264593",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Franchises", null, {});
  },
};
