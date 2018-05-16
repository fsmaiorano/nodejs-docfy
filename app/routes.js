const express = require('express');

const routes = express.Router();
const authController = require('./controllers/authController');
const projectController = require('./controllers/projectController');
const dashboardController = require('./controllers/dashboardController');
const documentController = require('./controllers/documentController');

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
routes.get('/signout', guestMiddleware, authController.signout);

routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

// App
routes.get('/app/dashboard', dashboardController.index);

// Project
routes.post('/project', projectController.add);
routes.get('/app/project/:projectId', projectController.show);

// Document
routes.get('/app/project/:projectId/document/new', documentController.newDocument);
routes.get('/app/project/:projectId/document/:documentId', documentController.show);

routes.use((err, req, res, _next) => {
  res.status(err.status || 500);
  return res.render('errors/index', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = routes;
