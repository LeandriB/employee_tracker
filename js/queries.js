// Initial Query
const menu = [
    {
        type: 'list',
        message: 'Pick an option to view the database: ',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Exit'],
        name:'menu'
    },
]

// Query to add a new department
const departmentQueries= [
    {
        type:'input',
        message:'Please enter a department that you would like to add: ',
        name:'addDepartment'
    }
]

// Query to add a new role
const roleQueries = [
    {
        type:'input',
        message:'Please specify the name of the role: ',
        name:'addRole'
    },
    {
        type:'input',
        message:'Please enter the salary for this role: ',
        name:'addSalary'
    },
    {
        type:'input',
        message:'Enter department ID associated with this role: ',
        name:'addRoleID'
    }
]

// Query to add a new employee
const employeeQueries = [
    {
        type:'input',
        message:'Enter the FIRST name of the employee you would like to add: ',
        name:'firstName'
    },
    {
        type:'input',
        message:'Enter the LAST name of the employee you would like to add: ',
        name:'lastName'
    },
    {
        type:'input',
        message:'Enter the role ID for this employee: ',
        name:'employeeRole' // FIX
    },
    {
        type:'input',
        message:'Enter manager ID this employee will report to: ',
        name:'employeeManager'
    }
]

// TODO: Update and Delete employee 

module.exports = {
    menu, 
    departmentQueries, 
    roleQueries, 
    employeeQueries }