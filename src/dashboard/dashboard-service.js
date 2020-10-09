const dashboardService = {

  getAllExercises(db, filters) {


    // if (exercise) {
    //   query.where('exercise', exercise);
    // }
    //let { gain_strength } = filters;
    const query = db.select('*').from('exercises');
    //.where( 'gain_strength', '=', gain_strength );

    return query;

  },

  getExerciseById(db, id) {
    return db('exercises').select('*').where({ id }).first();
  },
  getFilteredExercise(db, filter, equipVal, priority) {
    
    return db.raw(`select *
    from exercises e
    where (e.equipment_value = ${equipVal} or e.equipment_value = 1)
    and ${filter} = true 
    and e.exercise_priority <= ${priority}; `);
  }

}

module.exports = dashboardService;