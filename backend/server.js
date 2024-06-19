// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://joelkim04:kjh12241@cluster0.nclzqnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error(err);
});

// Define a schema for the email addresses
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const Email = mongoose.model('Email', emailSchema);

// API endpoint to handle email submissions
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: 'Email subscribed successfully' });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: 'Email already subscribed' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
