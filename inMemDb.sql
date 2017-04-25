--Switch out of database
\c souzooka

--Create database inmemdb
DROP DATABASE IF EXISTS inmemdb;
CREATE DATABASE inmemdb;

--Switch to database
\c inmemdb


--Create table empolyers
DROP TABLE IF EXISTS employers;
CREATE TABLE employers (
  id VARCHAR(2) PRIMARY KEY NOT NULL,
  fullname VARCHAR(255) NOT NULL
  );

--Populate employers
INSERT INTO employers (id, fullname)
VALUES ('dv', 'devleague');

INSERT INTO employers (id, fullname)
VALUES ('st', 'student');

INSERT INTO employers (id, fullname)
VALUES ('na', 'N/A');

--Create type job as enum
CREATE TYPE JOB AS ENUM ('dv', 'na', 'st');

--Create table users
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  gender VARCHAR(1) NOT NULL,
  jobtype JOB DEFAULT 'na'
  );

--Populate users
INSERT INTO users (name, age, gender, jobtype) VALUES
  ('Alice', 12, 'f', 'st'),
  ('Bob', 21, 'm', 'dv'),
  ('Claire', 56, 'f', 'dv'),
  ('David', 9, 'm', 'na'),
  ('Eric', 61, 'm', 'dv'),
  ('Fred', 45, 'm', 'dv'),
  ('George', 38, 'm', 'dv'),
  ('Hannah', 15, 'f', 'na'),
  ('Ilona', 17, 'f', 'st'),
  ('Jake', 27, 'm', 'dv'),
  ('Kathy', 8, 'f', 'na'),
  ('Liam', 20, 'm', 'st');

--byId function
SELECT *
FROM users
WHERE id = 3;

--youngest function
SELECT *
FROM users
ORDER BY age ASC
LIMIT 1;

--oldest function
SELECT *
FROM users
ORDER BY age DESC
LIMIT 1;

--males function
SELECT *
FROM users
WHERE gender = 'm';

--females function
SELECT *
FROM users
WHERE gender = 'f';