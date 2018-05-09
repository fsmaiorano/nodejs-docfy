const express = require('express');

const routes = express.Router();
const authController = require('./controllers/authController');

// const authMiddleware = require('./middlewares/auth');
const guestMiddleware = require('./middlewares/guest');

// middleware
routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});


// Auth
routes.get('/', guestMiddleware, authController.signin);
routes.get('/signup', guestMiddleware, authController.signup);
routes.post('/register', authController.register);
// routes.post('/authenticate', authController.authenticate);

routes.use((err, req, res, _next) => {
  res.status(err.status || 500);
  return res.render('errors/index', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = routes;
