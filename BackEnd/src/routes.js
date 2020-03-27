const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connections')

const ongController = require('./Controllers/ongController');
const incidentController = require('./Controllers/incidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile',ProfileController.index);


routes.get('/incidents', incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id',incidentController.delete)




module.exports = routes;