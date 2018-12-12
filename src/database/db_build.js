const fs = require('fs');

const buildDataBase = () => {
    const dbConnection = require('./db_connection.js');
    const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

    dbConnection.query(sql, (err, result) => {
        if (err) {
            console.log(err, `error`);
        } else {
            console.log(`database created`);
            dbConnection.end(() => {
                console.log(`connection closed`)
            })
        }
    })
};

buildDataBase();
