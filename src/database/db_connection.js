// const { Pool } = require("pg");
const url = require("url");
const pgp = require('pg-promise')();

const env = require("env2");
env("./config.env");

let DATABASE_URL = process.env.DATABASE_URL;

//check this line if database tests are not working!
if (process.env.NODE_ENV === "test") {
  DATABASE_URL = process.env.TEST_DB_URL;
}

if (!DATABASE_URL) {
  throw new Error("Environment variable DATABASE_URL must be set");
}

const params = url.parse(DATABASE_URL);

const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  ssl: params.hostname !== "localhost",
  user: username,
  password
};

const db = pgp(options);

module.exports = db;
