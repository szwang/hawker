import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import promise from 'bluebird';
import compare from promise.promisify(bcrypt.compare);
import uuid from 'node-uuid';

var orm = new Sequelize('hawker', 'suzanne', 'wang', {
  host: 'localhost',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

/** SCHEMA **/

var Items = orm.define('items', {
  title: { type: Sequelize.STRING, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false },
  description: { type: Sequelize.STRING, defaultValue: '' }
});

var Users = orm.define('users', {
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  schoolID: { type: Sequelize.INTEGER, allowNull: false }
});

var Schools = orm.define('schools', {
  name: { type: Sequelize.STRING, allowNull: false }
});

orm.sync();

/** AUTH FUNCTIONS **/

// takes in object { username: , password: } and callback function
// returns 
export function login(userInfo, callback) {
  var response = {
    success: false
  };
  var hashedPassword, userData;
  Users.findAll({
    where: {
      username: userInfo.username
    }
  }).then((data) => {
    userData = data;
    hashedPassword = data[0].dataValues.password;
  }).then((data) => {
    return compare(userInfo.password, hashedPassword)
      .then((registered) => {
        if(registered) {
          response = userData;
        }
        response.success = registered;
        callback(response);
      })
  })
}

export function signup(username, password, email, callback) {
  var response = {};
  var exists;
  Users.findOne({
    where: {
      username: signupInfo.username
    }
  }).then((user) => {
    exists = user; //TODO see if modification is possible with return statement
  }).then((user) => {
    if(exists === null) {
      return bcrypt.genSalt(10, (err, salt) => {
        if(err) {
          console.log('salt gen error: ', err);
          return;
        }
        bcrypt.hash(signupInfo.password, salt, (err, hash) => {
          Users.create({
            username: signupInfo.username,
            password: hash,
            email: signupInfo.email
          }).then((userData) => {
            userData.success = true;
            callback(userData);
          })
        })
      })
    }
  })
}

