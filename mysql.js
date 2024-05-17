const express = require('express');
const mysql = require('mysql2/promise'); // Use the promise-based version of mysql2

const app = express();
const port = 3000;

// Create a pool of database connections (recommended for scalability)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'rhudson',
  password: 'Password1',
  database: 'test1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Route to fetch all records from the Persons table
app.get('/persons', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Persons');
    console.log(rows);
    
    res.json(rows);   
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
