const express = require('express');
const router = express.Router();
const dashboardService = require('./dashboard-service');
const xss = require('xss');
const {requireAuth} = require('../middleware/jwt_auth')

router.use(express.json());


const serializeExercise = (exercise) => ({
  id: exercise.id,
  exercise_name: xss(exercise.exercise_name),
  target: exercise.target,
  exercise_priority: exercise.exercise_priority,
  equipment_value: exercise.equipment_value,
  exercise_description: xss(exercise.exercise_description),
  instructions: xss(exercise.instructions),
  link: xss(exercise.link),
  lose_weight: exercise.lose_weight,
  gain_muscle: exercise.gain_muscle,
  gain_strength: exercise.gain_strength,
  endurance: exercise.endurance

});

router
  .route('/')
  .get((req, res, next) => {
    
    //console.log('this is here:', req.query);
    //let {exercise_priority, equipment_value, } = req.query;

    dashboardService.getAllExercises(req.app.get('db'))//, {gain_strength: true})
    
      .then(exercises => {
        res.json(exercises.map(serializeExercise));
      })
      .catch(next);
  });

router
  .route('/:id')
  .all(requireAuth)
  .all((req, res, next) => {
    dashboardService.getExerciseById(req.app.get('db'), req.params.id)
      .then(exercise => {
        if (!exercise) {
          return express.status(404).json({
            error: { message: `Exercise doesn't exist` }
          });
        }
        res.exercise = exercise;
        next();
      })
      .catch(next)
  })


module.exports = router;