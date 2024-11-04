const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const app = express()
const cors = require('cors');

const port = 3001

app.use(express.json())
app.use(cors())

// Create a new SQLite database
const db = new sqlite3.Database('farmers.db')

// Create a table for storing farmers
db.run(`
  CREATE TABLE IF NOT EXISTS farmers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    gender TEXT NOT NULL,
    phoneNumber TEXT NOT NULL,
    district TEXT NOT NULL,
    nin TEXT,
    code TEXT,
    dateOfBirth TEXT NOT NULL
  )
`)

app.post('/api/farmer', (req, res) => {
  const {farmer} = req.body

  db.run(
    'INSERT INTO farmers (firstName, lastName, gender, phoneNumber, district, nin, code, dateOfBirth) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [
      farmer.firstName,
      farmer.lastName,
      farmer.gender,
      farmer.phoneNumber,
      farmer.district,
      farmer.nin,
      farmer.code,
      farmer.dateOfBirth,
    ],
    function (err) {
      if (err) {
        console.error('SQL error:', err.message)
        return res
          .status(500)
          .json({error: 'An error occurred while adding the farmer.'})
      }
      res.json({message: 'Farmer added successfully'})
    },
  )
})

// Define an API endpoint for retrieving all farmers
app.get('/api/farmers', (req, res) => {
  db.all('SELECT * FROM farmers', (err, rows) => {
    if (err) {
      console.error('Error fetching farmers:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json({ farmers: rows });
    }
  });
});


// Define an API endpoint for updating a farmer
app.put('/api/farmer/:id', (req, res) => {
  const { id } = req.params;
  const { farmer } = req.body;

  db.run(
    'UPDATE farmers SET firstName = ?, lastName = ?, gender = ?, phoneNumber = ?, district = ?, nin = ?, code = ?, dateOfBirth = ? WHERE id = ?',
    [
      farmer.firstName,
      farmer.lastName,
      farmer.gender,
      farmer.phoneNumber,
      farmer.district,
      farmer.nin,
      farmer.code,
      farmer.dateOfBirth,
      id,
    ],
    function (err) {
      if (err) {
        console.error('SQL error:', err.message)
        return res
          .status(500)
          .json({error: 'An error occurred while updating the farmer.'})
      }
      res.json({message: 'Farmer updated successfully'})})
});

// Define an API endpoint for deleting a to do
app.delete('/api/farmer/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('to delete farmer with id: ', id);
    await db.run('DELETE FROM farmers WHERE id = ?', id);
    res.json({ message: 'farmer deleted successfully' });
  } catch (error) {
    console.log('error deleting farmer', error);
    res.status(500).json({ message: 'Failed to delete farmer' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
