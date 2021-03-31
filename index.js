const { request, response } = require('express');
const express = require('express'); 
const app = express();
const {uuid} = require('uuidv4');

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {

    //const {title, owner} = request.query;
    

   return response.json(projects)
});

app.post('/projects', (request, response) => {

    const {title, owner} = request.body;
    const project = {id: uuid(), title, owner};
   
    projects.push(project); // esse push vai jogar a criação do nosso projeto para o nosso array

    return response.json(project); // sempre retornar o projeto recém criado e nunca exibir a 
});

app.put('/projects/:id', (request, response) => {
    
    const params = request.params;
    console.log(params)

    return response.json([
        'Projeto 50',
        'Projeto 51',
        'Projeto 52',
        'Projeto 53',
        'Projeto 54'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 50',
        'Projeto 2',
    ]);
});


app.listen(8080);