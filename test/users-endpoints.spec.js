const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
const bcrypt = require('bcryptjs');


describe('User endpoints!', function () {

  let db;

  const { testUsers } = helpers.makeExerciseFixtures()
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

  context(`Happy path for user Registration`, () => {
    it(`responds 201, serialized user, storing bcryped password`, () => {
      const newUser = {
        user_name: 'testyWesty',
        password: '11AAaa!!',
      }
      return supertest(app)
        .post('/api/user')
        .send(newUser)
        .expect(201)
        .expect(res => {
          expect(res.body).to.have.property('id')
          expect(res.body.user_name).to.eql(newUser.user_name)
          expect(res.body).to.not.have.property('password')
          expect(res.headers.location).to.eql(`/api/user/${res.body.id}`)
        })
        .expect(res =>
          db
            .from('users')
            .select('*')
            .where({ id: res.body.id })
            .first()
            .then(row => {
              expect(row.user_name).to.eql(newUser.user_name)

              return bcrypt.compare(newUser.password, row.password)
            })
            .then(compareMatch => {
              expect(compareMatch).to.be.true;
            })
        )
    })


  })

  context('Happy path for user endpoint', () => {
    beforeEach('insert articles', () =>
      helpers.seedUsers(
        db,
        testUsers

      )
    );
    it('responds with 200 and all of the users', () => {
      const expectedUsers = testUsers.map(user => {return { id: user.id, user_name:user.user_name }}
      )

      return supertest(app)
        .get('/api/user')
        .expect(200, expectedUsers)
    })
  })


})