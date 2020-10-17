const express = require('express');
const router = express.Router();
const exercisePlanServices = require('./exercise-plan-services');
router.use(express.json());
const {requireAuth} = require('../middleware/jwt_auth');

//Route for specific user exercise plan
router
  .route('/:name')
  .all(requireAuth)
  .get((req, res, next) => {
    let { name } = req.params;

    //Allows an authorized user to pull their exercise plan from plan table
    exercisePlanServices
      .getFilteredPlan(req.app.get('db'), name)
      .then((exercise) => {
        res.json(exercise.rows);
      })
      .catch(next);
  });

module.exports = router; 