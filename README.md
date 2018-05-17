## NodeJs-Docfy

:computer: A repository for create documentations of projects.

# dependencies:

- NodeJS
- MariaDB or MySQL

# database:

- Create a database with name: docfy
- Run: ./node_modules/.bin/sequelize db:migrate
- Edit database config in: config/database.js
```js
  module.exports = {
    username: 'root',
    password: '123',
    database: 'docfy',
    host: '127.0.0.1',
    dialect: 'mysql',
  };
```

## run:

```js
  npm install
  npm start
```
