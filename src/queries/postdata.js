const dbConnection = require('../database/db_connection.js');

const postNewUser = (name, userName, email, password, cb) => {
  dbConnection.query(
    'INSERT into users (full_name, username, email, password) VALUES ($1, $2, $3, $4)',
    [name, userName, email, password],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = postNewUser;
