const { usersRoute, suppliersRoute } = require('./routes/routes')
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
app.get('/', (req, res) => res.send('API Gyozilla'))

app.listen(port, () => console.log(`Toto part au ski avec Martine  ${port}!`))
app.use('/api', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
