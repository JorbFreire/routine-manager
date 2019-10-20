const express = require('express');
const FrequencyController = require('./controllers/FrequencyController');
const SessionController = require('./controllers/SessionController');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.delete('/tasks/del/:id', TaskController.remove);

routes.put('/tasks/frequency/:id', FrequencyController.add);

module.exports = routes;