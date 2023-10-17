"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Deliveries",
      [
        {
          delivery_date: new Date("2023-02-29"),
          carrier_name: "DPD",
          id_suppliers_orders: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          delivery_date: new Date("2023-10-31"),
          carrier_name: "Chronopost",
          id_suppliers_orders: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          delivery_date: new Date("2023-02-20"),
          carrier_name: "Colissimo",
          id_suppliers_orders: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Deliveries", null, {});
  },
};
