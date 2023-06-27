const tokenRoute = require("./token");
const rolesRoute = require("./roles");
const customersRoute = require("./customers");
const contactRoute = require("./contact");
const franchisesRoute = require("./franchises");
const suppliersRoute = require("./suppliers");
const product_categoriesRoute = require("./product_categories");
const statusRoute = require("./status");
const ratingsRoute = require("./ratings");
const stockRoute = require("./stock");
const ordersRoute = require("./orders");
const ingredientsRoute = require("./ingredients");
const menusRoute = require("./menus");
const productsRoute = require("./products");
const employeesRoute = require("./employees");
const authRoute = require("./auth");
const deliveriesRoute = require("./deliveries");
const supplier_ordersRoute = require("./supplier_orders");
const order_linesRoute = require("./order_lines");
const order_typesRoute = require("./order_types");
const hiringRoute = require("./hiring");
const newsRoute = require("./news");

module.exports = {
  tokenRoute,
  rolesRoute,
  customersRoute,
  contactRoute,
  franchisesRoute,
  suppliersRoute,
  product_categoriesRoute,
  statusRoute,
  ingredientsRoute,
  menusRoute,
  productsRoute,
  ratingsRoute,
  stockRoute,
  ordersRoute,
  employeesRoute,
  authRoute,
  deliveriesRoute,
  supplier_ordersRoute,
  order_linesRoute,
  order_typesRoute,
  hiringRoute,
  newsRoute,
};

// "start": "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && node index.js"
