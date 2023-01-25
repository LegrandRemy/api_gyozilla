const express = require('express');
const { usersRoute, authRoute } = require('./routes/routes');
const app = express()

const port = 3000

app.use(express.json());
app.use(usersRoute);
app.use(authRoute);

app.get('/', (req, res) => res.send('API Gyozilla'));

app.listen(port, () => console.log(`Toto part au ski${port}!`))
