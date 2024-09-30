// server.js
const express = require('express');
const db = require('./db'); // Import the database connection module
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.get('/', (req, res) => {
    res.send('Welcome to the Resident Microservice API!');
});


// POST route to add a new resident
app.post('/addResident', (req, res) => {
    const { name, email, phone_number, apt_number, lease_start, lease_end } = req.body;

    const query = 'INSERT INTO residents (name, email, phone_number, apt_number, lease_start, lease_end) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, email, phone_number, apt_number, lease_start, lease_end], (err, result) => {
        if (err) {
            console.error('Error adding resident:', err);
            res.status(500).send('Failed to add resident');
        } else {
            res.send('Resident added successfully');
        }
    });
});

// GET route to fetch all resident information
app.get('/residents', (req, res) => {
    const query = 'SELECT * FROM residents';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching residents:', err);
            res.status(500).send('Failed to fetch residents');
        } else {
            res.json(results);
        }
    });
});

// Listen on the port
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

