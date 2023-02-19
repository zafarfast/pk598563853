const mysql = require('mysql2'); //SQL module
const fs = require('fs') //File System module
const db = require('./createConnection') //SQL Database connection
const inquirer = require('inquirer') //Inquirer module


  function addRole(resolve, reject)
  {
    let listOfActiveDepts = [];

    db.query('SELECT dept_name FROM department',(err,result)=>{
      listOfActiveDepts = result.map((a)=>a.dept_name);
      console.log(listOfActiveDepts)
      console.log(listOfActiveDepts.length)
      inquirer
      .prompt([
        {
          name: "newRole",
          type: "input",
          message: "Enter name of new role?",
        },
        {
          name: "newSalary",
          type: "input",
          message: "Enter salary of this role",
        },
        {
          name: "addDept",
          type: "list",
          message: "Select departemnt of this new role",
          choices: [...listOfActiveDepts],
        },
  
  
      ]).then((response) => {
        let deptId;
        db.query(`SELECT id FROM department WHERE dept_name = "${response.addDept}"`,(err,result)=>{
          deptId = result[0].id
          db.query( `INSERT INTO role1 (id, title,salary,department_id) VALUES (${Math.floor(Math.random()*10000)},"${response.newRole}",${response.newSalary},${deptId})`,(err)=>{
            console.log(err)
            console.log("")
            db.query('SELECT * FROM role1',(err,result)=>{console.table(result)})
            return resolve()

        })  
        })
      })
    })
  }


  module.exports = addRole;