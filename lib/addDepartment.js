const mysql = require('mysql2'); //SQL module
const fs = require('fs'); //File System module
const db = require('./createConnection'); //SQL Database connection
const inquirer = require('inquirer') //Inquirer module
  
  function addDepartment(resolve, reject)
  {
    inquirer
    .prompt([
      {
        name: "options",
        type: "input",
        message: "What is the name of the new department?",
      },

    ]).then((response) => {
    let query = ""
    db.query( `INSERT INTO department (id, dept_name) VALUES (${Math.floor(Math.random()*10000)},"${response.options}")`,(err)=>{
        console.log(err)
        console.log("")
        db.query('SELECT * FROM department',(err,result)=>{console.table(result)})
        return resolve()
    })
    })


  }

  module.exports = addDepartment;