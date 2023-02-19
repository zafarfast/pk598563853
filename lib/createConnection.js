const mysql = require('mysql2');//SQL module

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Camberwell123',
      database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
  );

module.exports = db;