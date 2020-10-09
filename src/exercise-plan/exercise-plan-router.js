const express = require('express');
const router = express.Router();
const exercisePlanServices = require('./exercise-plan-services')
router.use(express.json());
const {requireAuth} = require('../middleware/jwt_auth')

router
  .route('/')
  .get((req, res, next) => {
    exercisePlanServices
      .getAllPlans(req.app.get('db'))
      .then((exercise) => {
        res.json(exercise);
      })
      .catch(next);
  })
  .post((req, res) => {
    let { user_id, exercise_id, frequency, goal } = req.body
    if (!user_id || !exercise_id || !frequency || !goal) {
      return res.status(400).send('Invalid Request, You need an exercise_id, user_id, a goal and a frequency')
    }
    let newExercise = {
      user_id,
      exercise_id,
      frequency,
      goal
    };
    exercisePlanServices.addExercises(req.app.get('db'), newExercise)
      .then(exercise => {
        res.status(201)
          .json(exercise)
      })
  })
router
  .route('/:id')
  .all(requireAuth)
  .all((req, res, next) => {
    exercisePlanServices.getExerciseById(req.app.get('db'), req.params.id)
      .then((exercise) => {
        if (!exercise) {
          return res.status(404).json({
            error: { message: `Exercise doesn't exist` }
          });
        }
        res.exercise = exercise;
        next();

      })
      .catch(next)
  })
  .get((req, res) => {
    res.json(res.exercise);
  })
  .delete((req, res, next) => {
    exercisePlanServices.deleteExercise(req.app.get('db'), req.params.id)
      .then(() => res.status(204).end())
      .catch(next)
  })




module.exports = router;