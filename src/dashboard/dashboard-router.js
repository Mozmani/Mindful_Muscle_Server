const express = require('express');
const router = express.Router();
const dashboardService = require('./dashboard-service');
const xss = require('xss');
router.use(express.json());

//simple function for exercise serialization
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
    // allows a GET request for all exercises
    dashboardService.getAllExercises(req.app.get('db'))
    
      .then(exercises => {
        res.json(exercises.map(serializeExercise));
      })
      .catch(next);
  });




module.exports = router;