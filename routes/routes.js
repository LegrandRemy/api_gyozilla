const tokenRoute = require('./token')
const usersRoute = require('./users')
const authRoute = require('./auth')
const suppliersRoute = require('./suppliers')
const categoriesRoute = require('./categories')
const measurement_unitsRoute = require('./measurement_units')
const meetingsRoute = require('./meetings')
const ordersRoute = require('./orders')
const product_categoriesRoute = require('./product_categories')
const product_ordersRoute = require('./product_orders')
const users_meetingsRoute = require('./users_meetings')
const stepsRoute = require('./steps')
const statusRoute = require('./status')
const rolesRoute = require('./roles')
const stockRoute = require('./stock')
const stock_typesRoute = require('./stock_types')
const stock_suppliersRoute = require('./stock_suppliers')
const ratingsRoute = require('./ratings')
const productsRoute = require('./products')
module.exports = {
  tokenRoute,
  usersRoute,
  authRoute,
  suppliersRoute,
  categoriesRoute,
  measurement_unitsRoute,
  meetingsRoute,
  ordersRoute,
  product_categoriesRoute,
  product_ordersRoute,
  users_meetingsRoute,
  statusRoute,
  stepsRoute,
  rolesRoute,
  stockRoute,
  stock_typesRoute,
  stock_suppliersRoute,
  productsRoute,
  ratingsRoute,
}
