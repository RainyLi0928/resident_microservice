// db.js
const mysql = require('mysql');

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost', // or the database IP address
    user: 'root',      // database username
    password: 'password', // database password
    database: 'resident_db' // database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

module.exports = db;

