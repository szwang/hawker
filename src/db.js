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

export function login(username, password, callback) {
  var response = {
    success: false
  }
  var hashedPassword, userData;
  Users.findAll({
    where: {
      username: username
    }
  }).then((data) => {
    userData = data;
    hashedPassword = data[0].dataValues.password;
  }).then((data) => {
    return compare(password, hashedPassword)
      .then((registered) => {
        if(registered) {
          response.user = userData;
        }
        response.success = registered;
        callback(response);
      })
  })
}