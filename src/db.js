var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var promise = require('bluebird');
var compare = promise.promisify(bcrypt.compare);
var uuid = require('node-uuid');

var orm = new Sequelize('hawker', 'suzanne', 'suzanne', {
  host: 'localhost',
  port: 8800,
  dialect: 'mysql',
  pool: { maxConnections: 50, maxIdleTime: 300},
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
  school: { type: Sequelize.STRING, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  school: { type: Sequelize.STRING, allowNull: false }
});

var Schools = orm.define('schools', {
  name: { type: Sequelize.STRING, allowNull: false }
});

orm.sync();

/** AUTH FUNCTIONS **/

exports.login = function(userInfo, callback) {
  var response = {
    success: false
  };
  var hashedPassword, userData;
  Users.findAll({
    where: {
      username: userInfo.username
    }
  }).then(function(data) {
    userData = data;
    hashedPassword = data[0].dataValues.password;
  }).then(function(data) {
    return compare(userInfo.password, hashedPassword)
      .then(function(registered) {
        if(registered) {
          response = userData;
        }
        response.success = registered;
        callback(response);
      })
  })
}

exports.signup = function(signupInfo, callback) {
  var response = {};
  var exists;
  console.log('info passed to db: ', signupInfo);
  Users.findOne({
    where: {
      username: signupInfo.username
    }
  }).then(function(user) {
    exists = user; //TODO see if modification is possible with return statement
  }).then(function(user) {
    if(exists === null) {
      return bcrypt.genSalt(10, function(err, salt) {
        if(err) {
          console.log('salt gen error: ', err);
          callback({ success: false });
        }
        bcrypt.hash(signupInfo.password, salt, function(err, hash) {
          Users.create({
            username: signupInfo.username,
            password: hash,
            email: signupInfo.email,
            school: signupInfo.school
          }).then(function(userData) {
            userData.success = true;
            console.log('user data submitted to db: ', userData)
            callback(userData);
          })
        })
      })
    } else {
      console.log('username already exists')
      callback({ success: false })
    }
  })
}

