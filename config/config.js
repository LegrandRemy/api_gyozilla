require('dotenv').config()

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'c444gyozilla',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.USER_DB,
    password: process.env.PWD_DB,
    database: process.env.USER_DB,
    host: process.env.HOST_DB,
    dialect: 'mysql',
    port: 5432,
  },
}
