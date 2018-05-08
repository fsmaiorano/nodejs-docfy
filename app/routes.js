const express = require('express');
const routes = express.Router();

authController = require('./controllers/authController');

//Auth
routes.get('/', authController.signIn);
