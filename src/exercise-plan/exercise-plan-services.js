//Service file for Exercise Plan Route.
const exercisePlanService = {
  // returns all entires from exercise plan table
  getAllPlans(db) {
    return db.select('*').from('exercise_plan');
  },
  // adds an entry to exercise plan table
  addExercises(db, newExercise) {
    return db
      .insert(newExercise)
      .into('exercise_plan')
      .returning('*')
      .then((exercise) => {
        return exercise[0];
      });
  },
  // identifies an exercise plan entry.
  getExerciseById(db, id) {
    return db('exercise_plan').select('*').where({ id }).first();
  },
  // Delete an exercise plan entry
  deleteExercise(db, id) {
    return db('exercise_plan').select('*').where({ id }).delete();
  },
  // Runs a query to grab all exercise plan entries for a specific user 
  getFilteredPlan(db, name) {
    
    return db.raw(`select e.id, e.exercise_name, e.exercise_description, e.instructions, e.link, e.target, ep.frequency, ep.user_id, ep.goal
    from exercises e 
    join exercise_plan ep on e.id = ep.exercise_id
    where ep.user_id like '${name}'
    order by e.id; `);
  }

};


module.exports = exercisePlanService;