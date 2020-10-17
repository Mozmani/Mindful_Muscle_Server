const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');



describe('Dashboard endpoints!', function () {

  let db;

  const { testUsers, testPlans, testExercises } = helpers.makeExerciseFixtures();
  

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => helpers.cleanTables(db));

  afterEach('cleanup', () => helpers.cleanTables(db));

  context('dashboard endpoint happy paths, GET /, GET /:id, GET /filter', () => {
    beforeEach('insert users', () =>
      helpers.seedUsers(
        db,
        testUsers

      )
    );
    beforeEach('insert exercises', () =>
      helpers.seedExercises(
        db,
        testExercises

      )
    );

    beforeEach('insert plans', () =>
      helpers.seedPlans(
        db,
        testPlans

      )
    );

    it('returns status 200 and returns all exercises', () => {
      return supertest(app)
        .get('/api/exercises')
        .expect(200)
        .expect(res => {
          expect(res.body).to.eql(testExercises);
          
        });

    });
    
    it('returns status 200 filter/:filter-:equipVal-:priority and returns all filtered exercises', () => {
      
      let filteredAnswers = helpers.findMyExercises(1, 1, 'endurance: true', testExercises);


      return supertest(app)
        .get('/api/filter/endurance-1-1')
        .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
        .expect(200)
        .expect(res => {
          expect(res.body).to.eql(filteredAnswers);

        });

    });
    
    

  });




});