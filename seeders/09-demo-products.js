'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: "Nem",
          description: "Délicieux nems aux boeufs et légumes",
          image: "products/1.jpg",
          price: 4,
          creation_steps: "1. Plonger les nems dans la friteuse, 2. ...",
          id_product_categories: 1,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Porc laqué",
          description: "Savoureuse viande de porc laqué au soja",
          image: "products/2.jpg",
          price: 15,
          creation_steps: "1. Couper le porc, 2. Couper les oignons, 3. ...",
          id_product_categories: 2,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mochi glacé",
          description: "Délicieux dessert glacé au thé vert",
          image: "products/4.jpg",
          price: 5,
          creation_steps: "1. Sortir du congélateur...",
          id_product_categories: 3,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jus de Litchi",
          description: "Délicieuse boisson au litchi",
          image: "products/5.jpg",
          price: 3,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maki comcombre",
          description: "Délicieux maki aux comcombres délicats et juteux avec du fromage",
          image: "products/6.jpg",
          price: 2,
          creation_steps: "1. Préparer une feuille d'algue...",
          id_product_categories: 2,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maki saumon avocat",
          description: "Délicieux maki au saumon et à l'avocat",
          image: "products/7.jpg",
          price: 3,
          creation_steps: "1. Préparer une feuille d'algue...",
          id_product_categories: 2,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samoussa aux légumes",
          description: "Croustillant samoussa aux légumes et épices",
          image: "products/8.jpg",
          price: 3,
          creation_steps: "1. Préparer une feuille de brique...",
          id_product_categories: 1,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coca Cola",
          description: "Boisson gazeuse fortement sucrée",
          image: "products/9.jpg",
          price: 2,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bière Tsing Tao",
          description: "Bière blonde chinoise légère 5°",
          image: "products/10.jpg",
          price: 3,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orangina",
          description: "Boisson gazeuse au bon goût d'orange",
          image: "products/11.jpg",
          price: 2,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Limonade Ramune",
          description: "Boisson gazeuse au goût sucrée et légérement citronnée",
          image: "products/12.jpg",
          price: 3,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nougat japonais",
          description: "Du bon nougat recouvert de sésame",
          image: "products/13.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 3,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boule coco",
          description: "Délicieuse boule coco fondante et servie chaude",
          image: "products/14.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 3,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dorayaki",
          description: "Des pancakes fourrés aux haricots rouges",
          image: "products/15.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 3,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bbopgi",
          description: "Gateau sucré coréen qui a inspiré Squid Game",
          image: "products/16.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 3,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bière Asahi",
          description: "Bière blonde légère japonaise 5°",
          image: "products/17.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lipton Ice Tea",
          description: "Un bon thé glacé saveur pêche",
          image: "products/18.jpg",
          price: 2,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Riz contonais",
          description: "Mélange de riz et de légumes",
          image: "products/19.jpg",
          price: 6,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nouilles sautés aux légumes",
          description: "Nouille sautés aux légumes sauce soja",
          image: "products/20.jpg",
          price: 6,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Poulet caramel",
          description: "Poulet mariné sauce sucrée et graines de sésame",
          image: "products/21.jpg",
          price: 9,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Crevette tempura",
          description: "Crevette pané au croustillant intense",
          image: "products/22.jpg",
          price: 6,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Crevettes sautées sel et poivre",
          description: "Délicieuse crevettes sautées simplement au sel et au poivre",
          image: "products/23.jpg",
          price: 10,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "California crevette avocat",
          description: "California à la crevette et morceau d'avocat",
          image: "products/24.jpg",
          price: 4,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "California saumon avocat",
          description: "California au saumon et morceau d'avocat",
          image: "products/25.jpg",
          price: 4,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salade de choux",
          description: "Petite salade de choux avec vinaigre de riz",
          image: "products/26.jpg",
          price: 3,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soupe miso",
          description: "Savoureuse petite soupe miso",
          image: "products/27.jpg",
          price: 2,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salade d'algues",
          description: "Petite salade d'algues saupoudré de sésame",
          image: "products/28.jpg",
          price: 4,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vin chinois",
          description: "Vin établi dans la province chinoise",
          image: "products/29.jpg",
          price: 20,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "San Pellegrino",
          description: "Eau gazeuse au goût légérement salé",
          image: "products/30.jpg",
          price: 3,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Evian",
          description: "Eau plate de bonne qualité",
          image: "products/31.jpg",
          price: 2,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brochettes boeuf fromage",
          description: "Excellente brochettes de boeuf au fromage mariné dans la sauce teriyaki",
          image: "products/32.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ravioli japonais",
          description: "Ravioli japonais aux légumes bien croustillant",
          image: "products/33.jpg",
          price: 4,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Porc tonkatsu",
          description: "Délicieux morceau de porc pané avec sauce tonkatsu maison",
          image: "products/34.jpg",
          price: 10,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sashimi saumon",
          description: "Petites lamelles de saumon finement découpées",
          image: "products/35.jpg",
          price: 6,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monster",
          description: "Boisson énergétique adopté par notre chef Rémy",
          image: "products/36.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sashimi thon",
          description: "Petites lamelles de saumon finement découpées",
          image: "products/37.jpg",
          price: 6,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Poulet tonkatsu",
          description: "Délicieux morceau de poulet pané avec sauce tonkatsu maison",
          image: "products/38.jpg",
          price: 10,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baozis",
          description: "Petit pain farci à la viande de boeuf et légumes",
          image: "products/39.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brochettes de boulettes de poulet",
          description: "Savoureuse brochette aux boulettes de poulet sauce teriyaki",
          image: "products/40.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chips de crevette",
          description: "Savoureuses et légères chips de crevettes",
          image: "products/41.jpg",
          price: 2,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nuggets de poulet frites",
          description: "De savoureux filets de poulet panés avec des frites",
          image: "products/42.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Glace fusée",
          description: "Glace aux différents parfums de fruits",
          image: "products/43.jpg",
          price: 2,
          creation_steps: "",
          id_product_categories: 3,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mister Freeze",
          description: "Glace à l'eau raffraichissante et aux saveurs variées",
          image: "products/44.jpg",
          price: 2,
          creation_steps: "",
          id_product_categories: 3,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hanami dango",
          description: "Brochette de mochis aux différentes saveurs",
          image: "products/45.jpg",
          price: 5,
          creation_steps: "",
          id_product_categories: 3,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saké japonais",
          description: "Délicieux saké provenant du Japon",
          image: "products/46.jpg",
          price: 10,
          creation_steps: "",
          id_product_categories: 4,
          id_menus: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wings",
          description: "Délicieux morceaux de poulet saveur barbecue",
          image: "products/47.jpg",
          price: 3,
          creation_steps: "",
          id_product_categories: 1,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Steack haché frites",
          description: "Incontournable steack frites pour les petits et les grands !",
          image: "products/48.jpg",
          price: 7,
          creation_steps: "",
          id_product_categories: 2,
          id_menus: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  },
}
