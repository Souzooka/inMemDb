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


