// const inquirer = require('inquirer');

// const { mainMenu } = require('..');
// const db  = require('..')

// const { departmentQueries, roleQueries, employeeQueries } = require('./queries');

// function departments() {
//     db.query('SELECT * FROM department', function (err, results) {
//         if (err) throw err;
//         console.table(results);
//     });
//     mainMenu();
// }

// function roles() {
//     db.query('SELECT * FROM role', function (err, results) {
//         if (err) throw err;
//         console.table(results);
//     });
//     mainMenu();
// }

// function employees() {
//     db.query('SELECT * FROM employee', function (err, results) {
//         if (err) throw err;
//         console.table(results);
//     });
//     mainMenu();
// }

// function addDepartment() {
//     inquirer.prompt(departmentQueries)
//     .then(userInput => {
//         console.log(userInput)
//         db.query(`INSERT INTO department(name) VALUES 
//             ('${userInput.addDepartment}')`, 
//             function (err, results) {
//                 if (err) throw err;
//                 console.log(results);
//                 console.log(`${userInput.addDep} successfully added`);
//         });
//         mainMenu();
//     })
// }

// function addRole() {
//     inquirer.prompt(roleQueries)
//     .then(userInput => {
//         console.log(userInput)
//         db.query(`INSERT INTO role(title, salary, department_id) VALUES 
//             ('${userInput.addRole}', 
//             ${userInput.addSalary},
//             ${userInput.addRoleID})`, 
//             function (err, results) {
//                 if (err) throw err;
//                 console.log(results);
//                 console.log(`${userInput.addRole} successfully added`);
//         });
//         mainMenu();
//     })
// }

// function addEmployee() {
//     inquirer.prompt(employeeQueries)
//     .then(userInput => {
//         console.log(userInput)
//         db.query(`INSERT INTO role(first_name, last_name, new_employee_role, new_employee_manager) VALUES 
//             ('${userInput.firstName}', 
//             ${userInput.lastName}',
//             ${userInput.employeeRole},
//             ${userInput.employeeManager})`,
//             function (err, results) {
//                 if (err) throw err;
//                 console.log(results);
//                 console.log(`${userInput.firstName} ${userInput.lastName} successfully added`);
//         })
//     })
// }

// module.exports = {
//     departments,
//     roles,
//     employees,
//     addDepartment,
//     addRole,
//     addEmployee }

