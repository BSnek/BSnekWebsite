const express = require('express');

const app = express();
require('dotenv').config();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
