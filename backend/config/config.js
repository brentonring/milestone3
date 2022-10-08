require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    // "host": "awseb-e-zmqjyptqpj-stack-awsebrdsdatabase-c9ag5hc2rux0.c1dgorfmb0e2.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "port": "5432"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "5432"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "awseb-e-zmqjyptqpj-stack-awsebrdsdatabase-c9ag5hc2rux0.c1dgorfmb0e2.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "port": "5432"
  }
}
