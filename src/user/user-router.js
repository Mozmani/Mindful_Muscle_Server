const express = require('express');
const router = express.Router();
const userService = require('./user-service')
const path = require ('path')
router.use(express.json());
const jsonBodyParser = express.json()


router
  .route('/')
  .get((req, res, next) => {
    userService.getAllUsers(req.app.get('db'))
      .then(users => {
        res.json(users);
      })
      .catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { password, user_name } = req.body

    for (const field of ['user_name', 'password'])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        })


    const passwordError = userService.validatePassword(password)

    if (passwordError)
      return res.status(400).json({ error: passwordError })

    userService.hasUserWithUserName(
      req.app.get('db'),
      user_name
    )
      .then(hasUserWithUserName => {
        if (hasUserWithUserName)
          return res.status(400).json({ error: `Username already taken` })

        return userService.hashPassword(password)
          .then(hashedPassword => {
            const newUser = {
              user_name,
              password: hashedPassword,
            }

            return userService.insertUser(
              req.app.get('db'),
              newUser
            )
              .then(user => {
                res
                  .status(201)
                  .location(path.posix.join(req.originalUrl, `/${user.id}`))
                  .json(userService.serializeUser(user))
              })
          })
      })
      .catch(next)
    
    
    
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