DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY NOT NULL,
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE role1 (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30),
    salary INT,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
    );

CREATE TABLE employee (
  id INT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role1(id)
  ON DELETE SET NULL
);


