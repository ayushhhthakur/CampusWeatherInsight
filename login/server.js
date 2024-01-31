// Login/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    username: process.env.USER_USERNAME,
    password: process.env.USER_PASSWORD,
  }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ token: 'your_generated_token' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Export the app for Vercel to use
module.exports = app;
