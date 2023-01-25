const {
  usersRoute,
  suppliersRoute,
  alertsRoute,
  contract_typesRoute,
  categoriesRoute,
  users_meetingsRoute,
  stepsRoute,
  rolesRoute,
  sales_revenuesRoute,
  ressourcesRoute,
  ressources_typesRoute,
  ressources_suppliersRoute,
  ratingsRoute,
  receiptsRoute,
  productsRoute,
} = require('./routes/routes')
const express = require('express')
const app = express()
const port = 3000
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Goyzilla API avec Swagger',
      version: '0.1.0',
      description:
        "Listes des API utilisées pour l'application Gyozilla dans Swagger",
    },
  },
  apis: ['./routes/*.js'],
}
const specs = swaggerJsdoc(options)

app.use(express.json())
app.use(usersRoute)
app.use(suppliersRoute)
app.use(alertsRoute)
app.use(contract_typesRoute)
app.use(categoriesRoute)
app.use(users_meetingsRoute)
app.use(stepsRoute)
app.use(sales_revenuesRoute)
app.use(rolesRoute)
app.use(ressourcesRoute)
app.use(ressources_typesRoute)
app.use(ressources_suppliersRoute)
app.use(receiptsRoute)
app.use(ratingsRoute)
app.use(productsRoute)
app.get('/', (req, res) => res.send('API Gyozilla'))

app.listen(port, () => console.log(`Toto part au ski avec Martine  ${port}!`))
app.use('/api', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
