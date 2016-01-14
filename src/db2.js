var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'suzanne',
    password: 'rhawke1',
    database: 'hawker',
    charset: 'utf8'
  }
})

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users'
})