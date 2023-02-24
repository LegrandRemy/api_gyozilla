const ordersRoute = require('./orders')
const deliveriesRoute = require('./deliveries')

const tokenRoute = require('./token')
const customersRoute = require('./customers')
const employeesRoute = require('./employees')
const authRoute = require('./auth')
const suppliersRoute = require('./suppliers')
const categoriesRoute = require('./categories')
const product_categoriesRoute = require('./product_categories')
const product_ordersRoute = require('./product_orders')
const statusRoute = require('./status')
const rolesRoute = require('./roles')
const stockRoute = require('./stock')
const stock_typesRoute = require('./stock_types')
const stock_suppliersRoute = require('./stock_suppliers')
const ratingsRoute = require('./ratings')
const productsRoute = require('./products')
module.exports = {
  deliveriesRoute,
  tokenRoute,
  ordersRoute,
  suppliersRoute,
  usersRoute,
  customersRoute,
  employeesRoute,
  authRoute,
  categoriesRoute,
  product_categoriesRoute,
  product_ordersRoute,
  statusRoute,
  rolesRoute,
  stockRoute,
  stock_typesRoute,
  stock_suppliersRoute,
  productsRoute,
  ratingsRoute,
}
