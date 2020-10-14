# Mindful Muscle Server!

## This is the backend server for The Mindful Muscle Client.

This server handles requests to generate a custom workout routine based on specific parameters. This allows the user to pick how often they want to workout, what goal s they have, as well as what equipment / resources they have available.

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
