const exercisePlanService = {

  getAllPlans(db) {
    return db.select('*').from('exercise_plan');
  },
  addExercises(db, newExercise) {
    return db
      .insert(newExercise)
      .into('exercise_plan')
      .returning('*')
      .then((exercise) => {
        return exercise[0];
      });
  },
  getExerciseById(db, id) {
    return db('exercise_plan').select('*').where({ id }).first();
  },
  deleteExercise(db, id) {
    return db('exercise_plan').select('*').where({ id }).delete();
  },
  getFilteredPlan(db, name) {
    
    return db.raw(`select e.id, e.exercise_name, e.exercise_description, e.instructions, e.link, e.target, ep.frequency, ep.user_id, ep.goal
    from exercises e 
    join exercise_plan ep on e.id = ep.exercise_id
    where ep.user_id like '%${name}%'
    order by e.id; `)
  }

}


module.exports = exercisePlanService;