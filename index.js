const {
  tokenRoute,
  rolesRoute,
  customersRoute,
  franchisesRoute,
  suppliersRoute,
  statusRoute,
  ingredientsRoute,
  productsRoute,
  product_categoriesRoute,
  ratingsRoute,
  stockRoute,
  ordersRoute,
  employeesRoute,
  authRoute,
  deliveriesRoute,
  supplier_ordersRoute,
  order_linesRoute,
} = require('./routes/routes')

const express = require('express')
const cors = require('cors') //autorise tous les navigateurs
  bodyParser = require('body-parser')
  swaggerJsdoc = require('swagger-jsdoc')
  swaggerUi = require('swagger-ui-express')
const app = express()
app.use(cors())
const port = 4000
const session = require('express-session')
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Goyzilla API avec Swagger',
      version: '0.1.0',
      description:
        "Listes des API utilisées pour l'application Gyozilla dans Swagger",
    },
    basePath: '/',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'],
}
// const specs = swaggerJsdoc(options)
const specs = swaggerJsdoc(options)

app.use(express.json())
app.use(
  session({
    secret: 'MaPhraseSecrete',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
)
app.use(tokenRoute)
app.use(deliveriesRoute)
app.use(customersRoute)
app.use(employeesRoute)
app.use(authRoute)
app.use(suppliersRoute)
app.use(ordersRoute)
app.use(rolesRoute)
app.use(stockRoute)
app.use(ratingsRoute)
app.use(ingredientsRoute)
app.use(franchisesRoute)
app.use(statusRoute)
app.use(productsRoute)
app.use(product_categoriesRoute)
app.use(supplier_ordersRoute)
app.use(order_linesRoute)
app.get('/', (req, res) => res.send('API Gyozilla'))
app.listen(port, () =>
  console.log(`Visiter l'API Gyozilla sur http://localhost:${port}/api`),
)
app.use('/api', swaggerUi.serve, swaggerUi.setup(specs))
app.use((req, res, next) => {
  res.status(404).send('Oups la page est introuvable')
})
