DROP DATABASE IF EXISTS quiz_db;
CREATE DATABASE quiz_db;

USE quiz_db;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  displayname varchar(255) NOT NULL,
  username varchar(255) UNIQUE NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE quiz (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  subject varchar(255) NOT NULL,
  ownerid int NOT NULL,
  FOREIGN KEY (ownerid) REFERENCES users(id),
  PRIMARY KEY (id)
);
CREATE TABLE questions (
  id int NOT NULL AUTO_INCREMENT,
  questions varchar(255) NOT NULL,
  quizid int NOT NULL,
  choices varchar(500) NOT NULL,
  answer varchar(255) NOT NULL,
  FOREIGN KEY (quizid) REFERENCES quiz(id),
  PRIMARY KEY (id)
);
CREATE TABLE scores (
  id int NOT NULL AUTO_INCREMENT,
  userid varchar(255) NOT NULL,
  quizid int NOT NULL,
  score int NOT NULL,
  FOREIGN KEY (userid) REFERENCES users(id),
  FOREIGN KEY (quizid) REFERENCES quiz(id),
  PRIMARY KEY (id)
);
