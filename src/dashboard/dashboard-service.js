const dashboardService = {

  getAllExercises(db) {
    return db.select('*').from('exercises');
  },
  getExerciseById(db, id) {
    return db('exercises').select('*').where({ id }).first();
  }

}

module.exports = dashboardService;