'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config')
const dashboardRoutes = require('./dashboard/dashboard-router')
const authRouter = require('./auth/auth-router')
const exercisePlanRouter = require('./exercise-plan/exercise-plan-router')
const userRouter = require('./user/user-router')
const epRouter = require('./exercise-plan/epRouter')
const filteredDash = require('./dashboard/filteredDashboard-router')

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/api/exercises', dashboardRoutes);
app.use('/api/auth', authRouter)
app.use('/api/adex', exercisePlanRouter)
app.use('/api/user', userRouter)
app.use('/api/epex', epRouter)
app.use('/api/filter', filteredDash)

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});


module.exports = app;