const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET route for example
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

// POST route to receive data
app.post('/greet', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hi, ${name || 'unknown'}!` });
});

// Run de server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
