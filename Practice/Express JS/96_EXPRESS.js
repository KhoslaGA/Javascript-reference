const express = require('express');
const path = require('path'); // Require the path module
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Hello World! - About');
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'Index.html')); // Ensure the correct file path
  // res.send('contact')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
