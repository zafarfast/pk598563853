const mysql = require('mysql2');//SQL module
const fs = require('fs')
const db = require('./createConnection') //SQL Database connection

  function viewAllEmployees(resolve,reject)
  {
    let query = 'SELECT employee.id, CONCAT(employee.first_name ," ", employee.last_name) AS "Employee Name", title as Title, dept_name as Department, salary as Salary, CONCAT(m.first_name," ", m.last_name) as Manager FROM employee LEFT JOIN role1 ON employee.role_id = role1.id LEFT JOIN employee m ON m.id = employee.manager_id LEFT JOIN department ON role1.department_id = department.id'
    db.query( query,(err,result)=>{
        console.log("")
        console.table(result)
        return resolve()
    })


  }

  module.exports = viewAllEmployees;