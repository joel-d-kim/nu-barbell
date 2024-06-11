// server.js
const express = require('express');

// Create an instance of Express
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world! This is your backend server.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
