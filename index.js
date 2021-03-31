const { request, response } = require('express');
const express = require('express'); //require
const app = express();

//console.log(app);

app.get('/', (request, response) => {
    response.send('Olá Mundo Janaina Fortunato!!!!!!');
})

app.listen(8080, () => {
    console.log('Servidor rodando!');
})