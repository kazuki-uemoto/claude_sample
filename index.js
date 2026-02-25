const express = require('express');

const app = express();
app.use(express.text({ type: '*/*' }));

app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/goodbye', (req, res) => {
  res.json({ message: 'Goodbye, World!' });
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.post('/api/echo', (req, res) => {
  res.json({ echo: req.body || null });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
