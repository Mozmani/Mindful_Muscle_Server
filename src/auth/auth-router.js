const express = require('express');
const AuthService = require('./auth-service');

const authRouter = express.Router();
const jsonBodyParser = express.json();

// Authentication on login router
authRouter
  .post('/login', jsonBodyParser, (req, res, next) => {
    
    const { user_name, password } = req.body;
    const loginUser = { user_name, password };

    //verifies that user entered both a username and password
    for (const [key, value] of Object.entries(loginUser))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        });
        
    AuthService.getUserWithUserName(
      req.app.get('db'),
      loginUser.user_name
    )
      //verifies user exists
      .then(dbUser => {
        if (!dbUser)
          return res.status(400).json({
            error: 'Incorrect Username or Password'
          });

        return AuthService.comparePasswords(loginUser.password, dbUser.password)
          //verifies the password hash matches for the current user.
          .then(matchPw => {
            if (!matchPw)
              return res.status(400).json({
                error: 'Incorrect Username or Password'
              });

            const sub = dbUser.user_name;
            const payload = {user_id: dbUser.id};
            //sends JWT auth token
            res.send({
              authToken: AuthService.createJwt(sub, payload)
            });
          });
      })
      .catch(next);   

  });





module.exports = authRouter;