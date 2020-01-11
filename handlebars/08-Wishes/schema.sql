DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes (
id int NOT NULL AUTO_INCREMENT,
wish varchar(25) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO wishes (wish) VALUES ("To be healthy.");