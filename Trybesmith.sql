DROP DATABASE IF EXISTS Trybesmith;

CREATE DATABASE Trybesmith;

USE Trybesmith;

CREATE TABLE users (
    id INT NOT NULL auto_increment,
    username VARCHAR(30) NOT NULL,
    classe VARCHAR(15) NOT NULL,
    level INT NOT NULL,
    password VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO users
VALUES (1, 'Legolas', 'Ranger', 10, '1234');

CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    category VARCHAR(15) NOT NULL,
    stock INT NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;

INSERT INTO items
VALUES (1, 'Felix Felicis', 'Potion', 10), (2, 'Frostmourne', 'Weapon', 5), (3, 'The One Ring', 'Accessory', 1),
(4, 'Golden Axe', 'Weapon', 3), (5, 'Daedric Armor', 'Armor', 7); 

CREATE TABLE sales (
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES items (id) ON DELETE CASCADE
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

