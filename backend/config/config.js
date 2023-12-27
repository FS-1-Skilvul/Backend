require("dotenv").config();

module.exports = {
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  development: {
    username: "freedb_final-project",
    password: "86cxZD?2VXx?yFM",
    database: "freedb_sahabat-umkm",
    host: "sql.freedb.tech",
    dialect: "mysql",
  },
};
