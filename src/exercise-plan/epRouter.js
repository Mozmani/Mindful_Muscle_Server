const express = require('express');
const router = express.Router();
const exercisePlanServices = require('./exercise-plan-services')
router.use(express.json());
const {requireAuth} = require('../middleware/jwt_auth')


router
  .route('/:name')
  .all(requireAuth)
  .get((req, res, next) => {
    let { name } = req.params;

    
    exercisePlanServices
      .getFilteredPlan(req.app.get('db'), name)
      .then((exercise) => {
        res.json(exercise.rows);
      })
      .catch(next);
  })

module.exports = router; 