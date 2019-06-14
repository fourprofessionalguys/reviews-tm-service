require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`,
    migrations: {
      directory: __dirname + '/database/migrations',
      seeds: __dirname + '/seeds'
    }
  },

  //postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
  production: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`,

    migrations: {
      directory: __dirname + '/database/migrations',
      seeds: __dirname + '/seeds'
    }
  }
};