const inquirer = require('inquirer');

const { menu } = require('./js/queries');
const { db } = require('./server')
// const { departments, roles, employees, 
//         addDepartment, addRole, addEmployee } = require('./js/db')
const { departmentQueries, roleQueries, employeeQueries } = require('./js/queries');

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
                console.log(`${userInput.addDep} successfully added`);
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
        db.query(`INSERT INTO role(first_name, last_name, new_employee_role, new_employee_manager) VALUES 
            ('${userInput.firstName}', 
            ${userInput.lastName}',
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

module.exports = { mainMenu };