BEGIN;

DROP TABLE IF EXISTS users, hobbies, reviews CASCADE;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(320) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS hobbies (
    id SERIAL PRIMARY KEY,
    hobbie_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    comments VARCHAR(255)    
);

-- CREATE TABLE IF NOT EXISTS reviews (
--     id SERIAL PRIMARY KEY,
--     rating INTEGER,
--     likes INTEGER,
--     reviews VARCHAR(255),
--     user_id INTEGER REFERENCES users(id) NOT NULL,
--     hobbies_id INTEGER REFERENCES hobbies(id) NOT NULL
-- );

INSERT INTO users (full_name, username, email, password) VALUES ('Lucy Wright', 'lucylu', 'lewright20@gmail.com', 'abcde');
INSERT INTO users (full_name, username, email, password) VALUES ('Kristina Jaggard', 'teenie', 'jaggardk@gmail.com', 'abcde');

INSERT INTO hobbies (hobbie_name, location, type, user_id) VALUES ('Bouldering', 'Biscuit Factory', 'physical', 1);
INSERT INTO hobbies (hobbie_name, location, type, user_id) VALUES ('Cinema', 'Peckhamplex', 'leisure', 2);
INSERT INTO hobbies (hobbie_name, location, type, user_id) VALUES ('Pottery', 'Biscuit Factory', 'creative', 1);
INSERT INTO hobbies (hobbie_name, location, type, user_id) VALUES ('Open mic night', 'Comedy Club', 'musical', 1);
INSERT INTO hobbies (hobbie_name, location, type, user_id) VALUES ('The Lion King', 'Lyceum Theatre', 'theatre', 2);

COMMIT;
