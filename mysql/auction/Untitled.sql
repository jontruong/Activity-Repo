DROP DATABASE IF EXISTS great_bay_db;

CREATE DATABASE great_bay_db;

USE great_bay_db;

CREATE TABLE auction (
id INT(10) AUTO_INCREMENT NOT NULL,
item VARCHAR(30),
bid INT(10),
PRIMARY KEY (id)
)