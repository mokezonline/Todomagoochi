const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const controllers = require('./controllers');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
const PORT = 3000;

app.use(express.json());

app.get('/todos', controllers.getTodos);
app.post('/todos', controllers.postTodo);

app.get('/pets/:id', controllers.getPet);
app.post('/pet', controllers.createPet);

app.listen(PORT, () => {
  console.log(`Todomagoochi listening on ${PORT}...`);
});