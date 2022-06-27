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

module.exports = { mainMenu };