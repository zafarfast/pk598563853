const inquirer = require('inquirer') //Inquirer module
const welcomeMsg = require('./lib/welcome') //Displays welcome banner at app start
const viewAllEmployees = require('./lib/viewAllEmployees') //Displays all employees
const viewAllDepartments = require('./lib/viewAllDepartments.js') //Displays all departments
const viewAllRoles = require('./lib/viewAllRoles.js') //Displays all roles
const addEmployee = require('./lib/addEmployee.js') //Add employee
const addDepartment = require('./lib/addDepartment.js') //Add Department
const updateRole = require('./lib/updateRole.js') //Update Employee Role
const addRole = require('./lib/addRole.js') //Update Employee Role


function getUserInput() {

    inquirer
      .prompt([
        {
          name: "options",
          type: "list",
          message: "What do you want to do?",
          choices: ["View All Employees", "Add Employee", "Update Employee Role","View All Role","Add Role","View All Departments","Add Department","Quit"]
        }
  
  
      ]).then((response) => {
        if (response.options == "View All Employees") {
            new Promise((resolve, reject)=>{
              viewAllEmployees(resolve,reject)
            }).then((response)=>{getUserInput()})
            
            
          }
        else if (response.options == "Add Employee") {
           //Done
          new Promise((resolve, reject)=>{
            addEmployee(resolve,reject)
          }).then((response)=>{getUserInput()})

        }
        else if (response.options == "Update Employee Role") {
           //Done
          new Promise((resolve, reject)=>{
            updateRole(resolve,reject)
          }).then((response)=>{getUserInput()})

        }
        else if (response.options == "View All Role") {
           //Done
          new Promise((resolve, reject)=>{
            viewAllRoles(resolve,reject)
          }).then((response)=>{getUserInput()})

        }
        else if (response.options == "Add Role") {
           //Done
          new Promise((resolve, reject)=>{
            addRole(resolve,reject)
          }).then((response)=>{getUserInput()})

         }
        else if (response.options == "View All Departments") {
          
          new Promise((resolve, reject)=>{
            viewAllDepartments(resolve,reject)
          }).then((response)=>{getUserInput()})

        }
        else if (response.options == "Add Department") {
           
          new Promise((resolve, reject)=>{
            addDepartment(resolve,reject)
          }).then((response)=>{getUserInput()})

        }
        else if (response.options == "Quit") {
          console.log("Quit")
          return 
        }

  
      });
  console.log("exit")
  }
  
  //Code execution starts here
  welcomeMsg();
  getUserInput();

  module.exports = {getUserInput}
