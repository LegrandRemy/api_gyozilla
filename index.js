const { usersRoute, tokenRoute } = require("./routes/routes");
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const session = require('express-session');
const app = express();
const port = 3000;
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
const specs = swaggerJsdoc(options);



app.use(express.json());
app.use(session({
    secret: 'MaPhraseSecrete',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(tokenRoute);
app.use(usersRoute);
app.get("/", (req, res) => res.send("API Gyozilla"));
app.listen(port, () => console.log(`Gyozilla est sur le port ${port} !`));
app.use(
    "/api",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: false })
);

