const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const routes = require('./app/routes');

const app = express();

app.use(express.static(path.resolve('app', 'public')));
app.use(flash());
app.use(methodOverride('_method'));

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000);
