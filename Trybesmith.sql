DROP DATABASE IF EXISTS Trybesmith;

CREATE DATABASE Trybesmith;

USE Trybesmith;

CREATE TABLE users (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    class VARCHAR(15) NOT NULL,
    level INT NOT NULL,
    password VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO users
VALUES (1, 'Legolas', 'Ranger', 10, '1234');