'use strict';
require('dotenv').config();

const knex = require('knex');
const app = require('./app');
const { PORT, DATABASE_URL } = require('./config');

//sets up knex
const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
});

//sets app to use db for routes
app.set('db', db);

//verifies server is listening
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});