# Employee Tracker

## Description
Employee Tracker is application that takes user input on a Node.js command line interface and stores the data in SQL database. It prompts the user to enter information about employees, edit their profile, roles and department information. The app then presents the database in the form of a table to the user.

## How to run the application

#### Prerequisites:
- Node JS
- MYSQL server

#### Steps:

1) Clone this repository to your machine by typing `git@github.com:zafarfast/pk598563853.git` on the terminal.
2) Initialize NPM in the cloned directory by typing `npm init`. 
3) Install Inquirer version 8.2.4 by typing `npm install inquirer@8.2.4`
4) Install MYSQL module by typing `npm install mysql2`
5) Initialize SQL server by typing `mysql -u <username> -p<password>`
6) Go to .\lib\db directory and run schema.sql and seeds.sql files by typing `source schema.sql` and `source seeds.sql`.
7) Run the application by typing `node index.js` in the terminal.
8) Select the options presented to you on terminal.

## Links
Github:
https://github.com/zafarfast/pk598563853

Screenshare video:

## Screesnhots

![Node](/lib/assets/images/screenshot_appStart.jpg)

![Node](/lib/assets/images/screenshot_addEmployee.jpg)

![Node](/lib/assets/images/screenshot_updateEmployeeRole.jpg)

