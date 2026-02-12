const express = require('express');
const app = express();
const port = 3000;

// Simulate a database connection URL from Environment Variables
const dbHost = process.env.DB_HOST || 'localhost';

app.get('/', (req, res) => {
  res.json({
    message: 'Real World App is Running!',
    database_connection: `Connected to ${dbHost}`,
    timestamp: new Date()
  });
});

app.listen(port, () => {
  console.log(`Backend API listening on port ${port}`);
});
