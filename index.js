const {
    tokenRoute,
    usersRoute,
    authRoute,
    suppliersRoute,
    alertsRoute,
    contract_typesRoute,
    categoriesRoute,
    hourly_typesRoute,
    measurement_unitsRoute,
    meetingsRoute,
    ordersRoute,
    product_categoriesRoute,
    product_ordersRoute,
    product_ressourcesRoute,
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
const session = require('express-session');
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Goyzilla API avec Swagger",
            version: "0.1.0",
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
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options)

app.use(express.json())
app.use(session({
    secret: 'MaPhraseSecrete',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(tokenRoute);
app.use(usersRoute)
app.use(authRoute);
app.use(suppliersRoute)
app.use(alertsRoute)
app.use(contract_typesRoute)
app.use(categoriesRoute)
app.use(hourly_typesRoute)
app.use(measurement_unitsRoute)
app.use(meetingsRoute)
app.use(ordersRoute)
app.use(product_categoriesRoute)
app.use(product_ordersRoute)
app.use(product_ressourcesRoute)
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
app.get('/', (req, res) => res.send('API Gyozilla'));
app.listen(port, () => console.log(`Gyozilla est sur le port ${port} !`));
app.use(
    "/api",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: false }),
);
app.use((req, res, next) => {
    res.status(404).send("Oups la page est introuvable");
});