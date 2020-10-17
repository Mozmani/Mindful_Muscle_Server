
// Dashboard service file to assist dashboard and filtered dashboard routes.
const dashboardService = {
  //grabs all exercises
  getAllExercises(db) {

    const query = db.select('*').from('exercises');
    

    return query;

  },
  //grabs a filtered exercise list based on query params
  getFilteredExercise(db, filter, equipVal, priority) {
    
    return db.raw(`select *
    from exercises e
    where (e.equipment_value = ${equipVal} or e.equipment_value = 1)
    and ${filter} = true 
    and e.exercise_priority <= ${priority}; `);
  }

};

module.exports = dashboardService;