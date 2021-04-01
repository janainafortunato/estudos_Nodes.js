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
    
    const {id} = request.params;
    const {title, owner} = request.body;


    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0) {
        return response.status(400).json({error: 'Projeto não foi encontrado'});
    }

    const project = {
        id,
        title,
        owner,
    }

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0) {
        return response.status(400).json({error: 'Projeto não foi encontrado'});
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});


app.listen(8080);