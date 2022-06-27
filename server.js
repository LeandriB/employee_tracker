// Required packages
const mysql = require("mysql2");
const env = require('dotenv');
env.config();

// Import function to prompt user
const { mainMenu } = require('./index');

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

module.exports = { db };


