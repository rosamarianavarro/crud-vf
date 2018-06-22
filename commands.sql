create database personasdb;
use personasdb;

create table persona(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(75) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(75) NOT NULL,
    address VARCHAR(75) NOT NULL,
    date DATE NOT NULL
    );