const { usersRoute } = require("./routes/routes");
const express = require("express"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");
const users = require("./models/users");
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
    },
    apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);

app.use(express.json());
app.use(usersRoute);
app.get("/", (req, res) => res.send("API Gyozilla"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);
