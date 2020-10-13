const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
const bcrypt = require('bcryptjs');


describe('exercise plan endpoints!', function () {

  let db;

  const { testUsers, testPlans, testExercises } = helpers.makeExerciseFixtures()
  const testUser = testUsers[0]

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  context('happy paths, GET, POST on /', () => {
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

    it('responds with 200 and all of the exercise plans', () => {

      let expectedPlans = testPlans


      return supertest(app)
        .get('/api/adex')
        .expect(200, expectedPlans)
    });

    it(`creates an entry to exercise_plan, responding with 201, and data. `, function () {

      const newEntry = {
        user_id: "DemoMan1",
        exercise_id: 64,
        frequency: 1,
        goal: "gain_strength"
      }
      return supertest(app)
        .post('/api/adex')
        .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
        .send(newEntry)
        .expect(201)
        .expect(res => {
          expect(res.body).to.have.property('id')
          expect(res.body.exercise_id).to.eql(newEntry.exercise_id)
          expect(res.body.frequency).to.eql(newEntry.frequency)
        })
        .expect(res =>
          db
            .from('exercise_plan')
            .select('*')
            .where({ id: res.body.id })
            .first()
            .then(row => {
              expect(row.exercise_id).to.eql(newEntry.exercise_id)
              expect(row.frequency).to.eql(newEntry.frequency)

            })
        );
    });


  });
  context('happy paths, GET, DELETE on /:id', () => {

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

    it('responds with 200 and the exercise plans', () => {

      let mockEntry = {
        id: 148,
        user_id: "DemoMan1",
        exercise_id: 8,
        frequency: 1,
        goal: "gain_strength"
      }

      return supertest(app)
        .get('/api/adex/148')
        .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
        .expect(200)
        .expect(res => {
          expect(res.body).to.eql(mockEntry)

        });
    });



  });
})