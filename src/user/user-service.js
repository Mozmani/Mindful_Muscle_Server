const bcrypt = require('bcryptjs');
const xss = require('xss');
//makes password require 1 lowerchase, 1 upper case, 1 number, 1 special char
const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const userService = {
  // service to get all users name/id from db
  getAllUsers(db) {
    return db.select('id', 'user_name').from('users');
  },
  // service to get specific user name
  getUserById(db, id){
    return db('users').select('id', 'user_name').where({ id }).first();
  },
  //check to see if specific user exists prior to registration
  hasUserWithUserName(db, user_name) {
    return db('users')
      .where({ user_name })
      .first()
      .then(user => !!user);
  },
  // service to insert new user to users table
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('users')
      .returning('*')
      .then(([user]) => user);
  },
  //service to validate password based of required fields
  validatePassword(password) {
    if (password.length < 8) {
      return 'Password be longer than 8 characters';
    }
    if (password.length > 72) {
      return 'Password be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces';
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return 'Password must contain one upper case, lower case, number and special character';
    }
    return null;
  },
  // service to hash password
  hashPassword(password) {
    return bcrypt.hash(password, 12);
  },
  //service to serialize user
  serializeUser(user) {
    return {
      id: user.id,
      user_name: xss(user.user_name),

    };
  },
};



module.exports = userService;