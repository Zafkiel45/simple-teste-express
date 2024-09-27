const express = require('express');
const app = express();
const port = 3000;

app.get('/route1', (req, res, next) => {
    res.send(`Rota 1 funcionando!`);
});

app.get('/route2', (req, res, next) => {
    res.send(`Rota 2 funcionando!`);
});

app.get('/route3', (req, res, next) => {
    res.send(`Rota 3 funcionando!`);
});

app.listen(port, () => {
    console.log("Escutando a porta:", port);
});