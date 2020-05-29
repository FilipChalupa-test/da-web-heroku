const express = require('express');

const app = express();
const port = 3000;

let visitCounter = 0;

app.get('/', (req, res) => res.send(`Visitor counter: ${++visitCounter}`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
