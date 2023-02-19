const mysql = require('mysql2');//SQL module
const fs = require('fs') //File System module
const inquirer = require('inquirer') //Inquirer module
const viewAllEmployees = require('./viewAllEmployees') //Displays all employees
const db = require('./createConnection') //SQL Database connection
  
let listOfRoles = [];
let listOfEmployee = [];

function addEmployee(resolve, reject)
{
 
  db.query('SELECT title FROM role1', (err,results)=>{

    listOfRoles = results.map( a => a.title)
    console.log(err)
    db.query('SELECT first_name, last_name FROM employee',(err,result)=>{
      listOfEmployee = result.map(a => a.first_name +" "+a.last_name)

      inquirer
      .prompt([
        {
          name: "firstName",
          type: "input",
          message: "Enter first name",
        },
        {
          name: "lastName",
          type: "input",
          message: "Enter last Name",
        },
        {
          name: "role",
          type: "list",
          message: "Select role",
          choices: [...listOfRoles],
        },
        {
          name: "manager",
          type: "list",
          message: "Select manager",
          choices: [...listOfEmployee],
        }
    
    
      ]).then((response) => {
        let roleId;
        let managerId;
        db.query(`SELECT id FROM role1 WHERE title = "${response.role}"`,(err,result)=>{
          roleId = result[0].id
          let firstPartOfManagerName = response.manager.split(" ")[0]
          let secondPartOfManagerName = response.manager.split(" ")[1]
          db.query(`SELECT id from employee WHERE first_name = "${firstPartOfManagerName}" AND last_name = "${secondPartOfManagerName}"`, (err,result)=>
          {
            db.query(`INSERT INTO employee (id, first_name,last_name,role_id,manager_id) VALUES (${Math.floor(Math.random()*10000)},"${response.firstName}","${response.lastName}",${roleId},${result[0].id})`, (err)=>{
            //db.query("SELECT * FROM employee", (err,result)=>{console.table(result)})
            query = 'SELECT employee.id, CONCAT(employee.first_name ," ", employee.last_name) AS "Employee Name", title as Title, dept_name as Department, salary as Salary, CONCAT(m.first_name," ", m.last_name) as Manager FROM employee LEFT JOIN role1 ON employee.role_id = role1.id LEFT JOIN employee m ON m.id = employee.manager_id LEFT JOIN department ON role1.department_id = department.id'
            db.query( query,(err,result)=>{
                console.log("")
                console.table(result)
            })

            return resolve()

            })
          })

        })
      })

    })

  
  })
  
}

module.exports = addEmployee;