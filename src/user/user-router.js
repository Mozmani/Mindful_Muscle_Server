const express = require('express');
const router = express.Router();
const userService = require('./user-service')
const path = require ('path')
router.use(express.json());
const jsonBodyParser = express.json()

//users Route

router
  .route('/')
  // grabs userName / id from Users DB
  .get((req, res, next) => {
    userService.getAllUsers(req.app.get('db'))
      .then(users => {
        res.json(users);
      })
      .catch(next);
  })
  // adds a user to users DB - Registration
  .post(jsonBodyParser, (req, res, next) => {
    const { password, user_name } = req.body

    // makes sure entry consists of a user name and password
    for (const field of ['user_name', 'password'])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        })

    // makes sure password meets required fields (over 8 chars, 1 capital, 1 number, 1 special char)
    const passwordError = userService.validatePassword(password)

    if (passwordError)
      return res.status(400).json({ error: passwordError })
    // Makes sure new username is unique
    userService.hasUserWithUserName(
      req.app.get('db'),
      user_name
    )
      .then(hasUserWithUserName => {
        if (hasUserWithUserName)
          return res.status(400).json({ error: `Username already taken` })

        // hashes password for db entry
        return userService.hashPassword(password)
          .then(hashedPassword => {
            const newUser = {
              user_name,
              password: hashedPassword,
            };
            // inserts new user data with hashed pw into users db
            return userService.insertUser(
              req.app.get('db'),
              newUser
            )
              .then(user => {
                res
                  .status(201)
                  .location(path.posix.join(req.originalUrl, `/${user.id}`))
                  .json(userService.serializeUser(user))
              });
          });
      })
      .catch(next);
    
    
    
  });



router
  .route('/:id')
  .all((req, res, next) => {
    userService.getUserById(req.app.get('db'), req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            error: { message: `User doesn't exist` }
          });
        }
        res.user = user;
        next();

      })
      .catch(next)
  })
  .get((req, res) => {
    res.json(res.user);
  })





module.exports = router;