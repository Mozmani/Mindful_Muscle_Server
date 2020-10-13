const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');


// Authentication on login router service file
const AuthService = {

  // Grabs username from DB
  getUserWithUserName(db, user_name) {
    return (db('users'))
      .where({ user_name })
      .first();
  },
  // Compares PW hash in DB to hash of current password entry
  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash)
  },
  //Simple JSON webtoken creation service
  createJwt(subject, payload) {
    return jwt.sign(payload, config.JWT_SECRET, {
      subject,
      algorithm: 'HS256',
    });
  },
  //Simple verification of JSON web token 
  verifyJwt(token) {
    return jwt.verify(token, config.JWT_SECRET, {
      algorithms: ['HS256'],
    });
  },
};



module.exports = AuthService;