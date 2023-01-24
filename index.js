const express = require('express');
const { usersRoute, suppliersRoute } = require('./routes/routes');
const app = express()
const port = 3000

app.use(express.json());
app.use(usersRoute);
app.use(suppliersRoute);
app.get('/', (req, res) => res.send('API Gyozilla'));

app.listen(port, () => console.log(`Toto part au ski${port}!`))
