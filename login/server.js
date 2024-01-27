const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load variables from .env file

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Load users from environment variables
const users = [
  {
    username: process.env.USER1_USERNAME,
    password: process.env.USER1_PASSWORD,
  },
  {
    username: process.env.USER2_USERNAME,
    password: process.env.USER2_PASSWORD,
  },
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
