require("dotenv").config();

module.exports = {
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  development: {
    username: "sql12665737",
    password: "9SiMJmWYhA",
    database: "sql12665737",
    host: "sql12.freemysqlhosting.net",
    dialect: "mysql",
  },
};
