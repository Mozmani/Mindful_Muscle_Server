const express = require('express');
const router = express.Router();
const dashboardService = require('./dashboard-service');
router.use(express.json());
const {requireAuth} = require('../middleware/jwt_auth')


// Filtered Dashboard Route
router
  .route('/:filter-:equipVal-:priority')
  .all(requireAuth) 
  .get((req, res, next) => {
    let { filter, equipVal, priority } = req.params;

    //allows an authorized user the ability to get a filtered dashboard based on their client selections
    dashboardService
      .getFilteredExercise(req.app.get('db'), filter, equipVal, priority)
      .then((exercise) => {
        res.json(exercise.rows);
      })
      .catch(next);
  });

module.exports = router; 