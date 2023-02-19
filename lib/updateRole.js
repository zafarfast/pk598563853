const mysql = require('mysql2'); //SQL module
const fs = require('fs')
const db = require('./createConnection') //SQL Database connection
const inquirer = require('inquirer') //Prompts the user for input

function updateRole(resolve, reject) {

  let listOfActiveEmployees = [];
  let listofRole = [];
  db.query('SELECT first_name,last_name, title, role1.id FROM employee RIGHT JOIN role1 ON employee.role_id = role1.id', (err, result) => {
    listOfActiveEmployees = result.map((a) => {
      if (a.first_name != null && a.last_name != null) { return a.first_name + " " + a.last_name }
      else return null
    });

    listOfActiveEmployees = listOfActiveEmployees.filter((a) => {
      if (a != "null null") { return a }
    })

    listofRole = result.map((a) => a.title);

    inquirer
      .prompt([
        {
          name: "selectEmployee",
          type: "list",
          message: "Select Elmployee whose role you want to change",
          choices: [...listOfActiveEmployees]
        },

        {
          name: "selectRole",
          type: "list",
          message: "Select role you want to set for this employee",
          choices: [...listofRole]
        }

      ]).then((result) => {
        let firstName = result.selectEmployee.split(" ")[0]
        let lastName = result.selectEmployee.split(" ")[1]

        db.query(`SELECT id FROM role1 WHERE title = "${result.selectRole}"`, (err, result) => {
          let roleId = result[0].id
          let query = `UPDATE employee
          SET role_id = ${roleId}
          WHERE first_name="${firstName}" AND last_name="${lastName}";
          `
          db.query(query, (err) => {
            console.log(err)
            console.log("")
            db.query('SELECT * FROM employee', (err, result) => { console.table(result) })
            return resolve()

          })

        })


      })


  }
  )


}

module.exports = updateRole;