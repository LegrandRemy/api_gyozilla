const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.get('/', (req, res) => res.send('API Gyozilla'));

app.listen(port, () => console.log(`Toto part au ski${port}!`))
