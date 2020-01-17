CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (

  id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	body varchar(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	PRIMARY KEY (id)

);