const dbConnection = require('../database/db_connection');

const getHobbies = (cb) => {
  dbConnection.query('SELECT * FROM hobbies', (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res.rows);
  });
};

const getHobby = (hobbyId, cb) => {
  dbConnection.query(
    `SELECT * FROM hobbies WHERE id = ${hobbyId}`,
    (err, res) => {
      if (err) {
        return cb(err);
      }
      cb(null, res.rows);
    }
  );
};

// IF WE GET TO PERSONAL DASHBOARDS!

// const getUserDetails = (username, cb) => {
//   dbConnection.query(
//     `SELECT full_name, username, email FROM users WHERE username = ${username}`,
//     (err, res) => {
//       if (err) {
//         return cb(err);
//       }
//       cb(null, res.rows);
//     }
//   );
// };

module.exports = {
  getHobbies,
  getHobby,
  getUserDetails
};
