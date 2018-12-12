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
    comments VARCHAR(255) NOT NULL    
);

CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    rating INTEGER,
    likes INTEGER,
    reviews VARCHAR(255),
    user_id INTEGER REFERENCES users(id) NOT NULL,
    hobbies_id INTEGER REFERENCES hobbies(id) NOT NULL
);

INSERT INTO hobbies (hobbie_name, location, type) VALUES ('Bouldering', 'Biscuit Factory', 'physical');
INSERT INTO hobbies (hobbie_name, location, type) VALUES ('Cinema', 'Peckhamplex', 'leisure');
INSERT INTO hobbies (hobbie_name, location, type) VALUES ('Pottery', 'Biscuit Factory', 'creative');
INSERT INTO hobbies (hobbie_name, location, type) VALUES ('Open mic night', 'Comedy Club', 'musical');
INSERT INTO hobbies (hobbie_name, location, type) VALUES ('The Lion King', 'Lyceum Theatre', 'theatre');

COMMIT;
