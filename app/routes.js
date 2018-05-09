const express = require('express');

const routes = express.Router();
const authController = require('./controllers/authController');

// middleware
routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});


// Auth
routes.get('/', authController.signin);
routes.get('/signup', authController.signup);

module.exports = routes;
