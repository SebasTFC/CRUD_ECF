-- Active: 1708774293679@@127.0.0.1@3306@bdd
-- creating the database
CREATE DATABASE CRUD_ECF;

--using the database
use CRUD_ECF;

--creating a table
CREATE TABLE service (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(50) NOT NULL
);

-- to show all tables 
SHOW TABLES;

-- to describe the table
describe service;

