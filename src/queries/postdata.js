const dbConnection = require("../database/db_connection.js");

const postNewUser = (name, userName, email, pass, cb) => {
  dbConnection.query(
    "INSERT into users (full_name, username, email, password) VALUES ($1, $2, $3, $4)",
    [name, userName, email, pass],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

const postNewHobbie = (hname, location, type, id, comments, cb) => {
  dbConnection.query(
    "INSERT into hobbies (hobbie_name, location, type, user_id, comments) VALUES ($1, $2, $3, $4, $5)",
    [hname, location, type, 1, comments],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = {
  postNewUser,
  postNewHobbie
};
