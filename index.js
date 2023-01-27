const {
  tokenRoute,
  usersRoute,
  authRoute,
  suppliersRoute,
  contract_typesRoute,
  categoriesRoute,
  hourly_typesRoute,
  measurement_unitsRoute,
  meetingsRoute,
  ordersRoute,
  product_categoriesRoute,
  product_ordersRoute,
  product_ressources_receiptsRoute,
  users_meetingsRoute,
  stepsRoute,
  rolesRoute,
  sales_revenuesRoute,
  ressourcesRoute,
  ressources_typesRoute,
  ressources_suppliersRoute,
  ratingsRoute,
  productsRoute,
  hourliesRoute,
} = require('./routes/routes')

const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const app = express()
const port = 3000
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
app.use(usersRoute)
app.use(authRoute)
app.use(suppliersRoute)
app.use(contract_typesRoute)
app.use(categoriesRoute)
app.use(hourly_typesRoute)
app.use(measurement_unitsRoute)
app.use(meetingsRoute)
app.use(ordersRoute)
app.use(product_categoriesRoute)
app.use(product_ordersRoute)
app.use(product_ressources_receiptsRoute)
app.use(users_meetingsRoute)
app.use(stepsRoute)
app.use(sales_revenuesRoute)
app.use(rolesRoute)
app.use(ressourcesRoute)
app.use(ressources_typesRoute)
app.use(ressources_suppliersRoute)
app.use(ratingsRoute)
app.use(productsRoute)
app.use(hourliesRoute)
app.get('/', (req, res) => res.send('API Gyozilla'));
app.listen(port, () => console.log(`Visiter l'API Gyozilla sur http://localhost:${port}/api`));
app.use(
  "/api",
  swaggerUi.serve,
  swaggerUi.setup(specs)
)
app.use((req, res, next) => {
    res.status(404).send("Oups la page est introuvable");
});