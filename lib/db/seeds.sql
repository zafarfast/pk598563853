INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Alice", "Parket",1,4),
       (2, "Bob", "Dylon",4,3),
       (3, "Garry", "Kumar",2,4),
       (4, "Charlie", "Ryan",3, null);

INSERT INTO role1 (id, title, salary, department_id)
VALUES (1, "Manager", 100000,1),
       (2, "Assistant", 60000,3),
       (3, "CEO",250000,2),
       (4, "CFO",20000,4);

INSERT INTO department (id, dept_name)
VALUES (1, "Finance"),
       (2, "Operations"),
       (3, "IT"),
       (4, "Marketing");
