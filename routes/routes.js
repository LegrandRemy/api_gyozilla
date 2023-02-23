const ordersRoute = require('./orders')
const deliveriesRoute = require('./deliveries')
const customersRoute = require('./customers')
const employeesRoute = require('./employees')
const tokenRoute = require('./token')
const authRoute = require('./auth')
const rolesRoute = require('./roles')
const stockRoute = require('./stock')
const ratingsRoute = require('./ratings')
const statusRoute = require('./status')
const ingredientsRoute = require('./ingredients')
const franchisesRoute = require('./franchises')

const suppliersRoute = require('./suppliers')
const categoriesRoute = require('./categories')
const product_categoriesRoute = require('./product_categories')
const product_ordersRoute = require('./product_orders')
const stock_typesRoute = require('./stock_types')
const stock_suppliersRoute = require('./stock_suppliers')
const productsRoute = require('./products')
module.exports = {
  deliveriesRoute,
  tokenRoute,
  ordersRoute,
  suppliersRoute,
  ratingsRoute,
  statusRoute,
  stockRoute,
  ingredientsRoute,
  customersRoute,
  employeesRoute,
  franchisesRoute,

  authRoute,
  categoriesRoute,
  product_categoriesRoute,
  product_ordersRoute,
  rolesRoute,
  stock_typesRoute,
  stock_suppliersRoute,
  productsRoute,
}
