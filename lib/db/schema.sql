DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee (
  id INT ,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
);

CREATE TABLE role1 (
    id INT,
    title VARCHAR(30),
    salary INT,
    department_id INT
    );

CREATE TABLE department (
  id INT,
  dept_name VARCHAR(30)
);
