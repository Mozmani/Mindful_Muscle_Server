const AuthService = require('../auth/auth-service')

// function to require authentication
function requireAuth(req, res, next) {
  const authToken = req.get('Authorization') || '';

  let bearerToken;
  // makes sure user has a bearer token
  if (!authToken.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({ error: 'Missing bearer token' })
  } else {
    // sets bearer token 
    bearerToken = authToken.slice(7, authToken.length)
  }

  try {
    // sets payload to a verfied token 
    const payload = AuthService.verifyJwt(bearerToken)

    // grabs user from payload
    AuthService.getUserWithUserName(
      req.app.get('db'),
      payload.sub
    )
      // verifies user exists and is authorized, if so sets request user to requesting user and moves forward
      .then(user => {
        if (!user)
          return res.status(401).json({ error: 'Unauthorized request' })
        req.user = user;
        next();
      })
      .catch(err => {
        console.error(err);
        next(err);
      });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized request' });
  }
}

module.exports = {
  requireAuth,
};