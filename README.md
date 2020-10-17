# Mindful Muscle Server!

## This is the backend server for The Mindful Muscle Client.

This server handles requests to generate a custom workout routine based on specific parameters. This allows the user to pick how often they want to workout, what goal s they have, as well as what equipment / resources they have available.
![Mindful Muscle](https://raw.githubusercontent.com/Mark-The-Dev/Mindful_Muscle_Client/master/public/mm-meta.png)

## Set up

1. clone this repo to your local machine
2. Install node dependencies `npm i`
3. add variables to example.env (NODE_ENV=development, PORT, DATABASE_URL, TEST_DATABASE_URL JWT_SECRET)
4. set example.env to .env 
5. create Database to store tables
6. migrate tables to database `npm run migrate`
7. seed newseed.sql to seed the exercise table.
8. download Mindful Muscle client and follow set up instructions! 
9. run the server and client locally and you are good to go!

## Tech Stack

Fontend: React.js, Create React App (webpack)
Server: Node.js, express, Knex
Database: Postgres SQL

## API overview
```
/api
.
├── /auth
│   └── POST
│       ├── /login
├── /users
│   └── GET
│   └── GET /:id
│   └── POST
│       └── /
├── /exercises
│   └── GET
│       ├── /
├── /adex
│   └── GET
│   └── GET /:id
│   └── POST
│       ├── /
│   └── DELETE
│       ├── /:id
├── /epex
│   └── GET /:name
├── /filter
│   └── GET /:filter-:equipVal-:priority
```
## API documentation
```
* POST api/auth/login

// req.body
{
  username: String,
  password: String
}

// res.body
{
  authToken: String
}

* GET api/users
// res.body
[
  {
    username: String
  }
]
* GET api/users/:id
// res.body 
{
  username: String
}

* POST api/users
// req.body
{
  username: String,
  password: String
}

// res.body
{
  username: String
}
* GET api/exercises
//res.body
[
  {
    exercise_name: String
    exercise_description: String
    exercise_instructions: String
    exercise_target: String
    exercise_frequency: Number
    equipment_value: Number
    link: String
    gain_strength: Boolean
    gain_muscle: Boolean
    lose_weight: Boolean
    endurance: Boolean
  }
]
* GET api/adex
// res.body
[
  {
    username: String
    exercise_id: Number
    goal: String
    frequency: Number
  }
]
* GET api/adex/:id
// req.header
Authorization: Bearer ${token}

// res.body
  {
    username: String === id
    exercise_id: Number
    goal: String
    frequency: Number
  }

* POST api/adex
  // req.body
{
  user_name: String,
  exercise_id: Number,
  frequency: Number,
  goal: String
}

// res.body
{
  user_name: String,
  exercise_id: Number,
  frequency: Number,
  goal: String
}

* DELETE api/adex/:id
//req.body
{
  id: number
}
* GET api/epex/:name
// req.header
Authorization: Bearer ${token}

// res.body
[
  {
    username: String === name
    exercise_id: Number
    goal: String
    frequency: Number
  }
]
* GET api/filter/:filter-:equipVal-:priority
// req.header
Authorization: Bearer ${token}

// res.body
[
  {
    exercise_name: String
    exercise_description: String
    exercise_instructions: String
    exercise_target: String
    exercise_frequency: Number <= priority
    equipment_value: Number === equipVal or 1
    link: String
    gain_strength: Boolean === filter
    gain_muscle: Boolean === filter
    lose_weight: Boolean === filter
    endurance: Boolean === filter
  }
]
```

## Scripts

Start the application `npm start`
Start nodemon for the application `npm run dev`
Run the tests `npm test`
Migrate the tables `npm run migrate`
Migrate Test DB `npm run migrate:test`

## Special Thanks!

Special thanks to Thinkful's software engineering immersion program for inspiring me to create this application.

## About Me

* [GitHub Profile](https://github.com/Mark-The-Dev)
* [LinkedIn](https://www.linkedin.com/in/mark-marcello-8896481b1)
