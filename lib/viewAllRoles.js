const mysql = require('mysql2');//SQL module
const fs = require('fs')
const db = require('./createConnection') //SQL Database connection


  function viewAllRoles(resolve, reject)
  {
    let query = 'SELECT role1.id as ID, title as Title, salary AS Salary, dept_name as Department FROM role1 JOIN department ON role1.id = department.id'
    db.query( query,(err,result)=>{
        console.log("")
        console.table(result)
        return resolve()

    })
  }

  module.exports = viewAllRoles;