const mysql = require('mysql2');//SQL module
const fs = require('fs')
const db = require('./createConnection') //SQL Database connection

  

  function viewAllDepartments(resolve, reject)
  {
    let query = 'SELECT id, dept_name AS Department FROM department'
    db.query( query,(err,result)=>{
        console.log("")
        console.table(result)
        return resolve()

    })
  }

  module.exports = viewAllDepartments;