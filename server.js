// Required packages
const mysql = require("mysql2");
const inquirer = require('inquirer');
const env = require('dotenv');
env.config();

// Import function to prompt user
// const { mainMenu } = require('./index');
const { menu, departmentQueries, roleQueries, employeeQueries } = require('./js/queries');

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the employee database.");
    mainMenu();
});

// Functions for user prompts
function mainMenu() {
    inquirer.prompt(menu)
    .then(userInput => {
        console.log(userInput);
        switch(userInput.menu) {
            case 'View all departments':
                departments();
            break; 
            case 'View all roles':
                roles();
            break;
            case 'View all employees':
                employees();
            break;
            case 'Add a department':
                addDepartment();
            break;
            case 'Add a role':
                addRole();
            break;
            case 'Add an employee':
                addEmployee();
            break;
            // TODO: update and delete employee    
            // TODO: add exit switch case for user
        }
    })
}

function departments() {
    let sql = 'SELECT * FROM department';
    db.query(sql, function (err, results) {
        if (err) 
            throw err;
        console.table(results);
    });
    mainMenu();
}

function roles() {
    let sql = 'SELECT * FROM role';
    db.query(sql, function (err, results) {
        if (err) 
            throw err;
        console.table(results);
    });
    mainMenu();
}

function employees() {
    let sql = 'SELECT * FROM employee';
    db.query(sql, function (err, results) {
        if (err) 
            throw err;
        console.table(results);
    });
    mainMenu();
}

function addDepartment() {
    inquirer.prompt(departmentQueries)
    .then(userInput => {
        console.log(userInput)
        db.query(`INSERT INTO department(name) VALUES 
            ('${userInput.addDepartment}')`, 
            function (err, results) {
                if (err)
                    throw err;
                console.log(results);
                console.log(`${userInput.addDepartment} successfully added`);
        });
        mainMenu();
    })
}

function addRole() {
    inquirer.prompt(roleQueries)
    .then(userInput => {
        console.log(userInput)
        db.query(`INSERT INTO role(title, salary, department_id) VALUES 
            ('${userInput.addRole}', 
            ${userInput.addSalary},
            ${userInput.addRoleID})`, 
            function (err, results) {
                if (err) 
                    throw err;
                console.log(results);
                console.log(`${userInput.addRole} successfully added`);
        });
        mainMenu();
    })
}

function addEmployee() {
    inquirer.prompt(employeeQueries)
    .then(userInput => {
        console.log(userInput)
        db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES 
            ('${userInput.firstName}', 
            '${userInput.lastName}',
            ${userInput.employeeRole},
            ${userInput.employeeManager})`,
            function (err, results) {
                if (err) 
                    throw err;
                console.log(results);
                console.log(`${userInput.firstName} ${userInput.lastName} successfully added`);
        })
    })
}


