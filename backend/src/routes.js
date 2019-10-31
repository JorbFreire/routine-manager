const express = require('express');
const FrequencyController = require('./app/controllers/FrequencyController');
const SessionController = require('./app/controllers/SessionController');
const TaskController = require('./app/controllers/TaskController');

const authMiddleware = require('./app/middlewares/auth');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.show);
routes.post('/login', SessionController.login);

routes.use(authMiddleware);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.delete('/tasks/del/:id', TaskController.remove);
routes.put('/tasks/frequency/:id', FrequencyController.add);

module.exports = routes;