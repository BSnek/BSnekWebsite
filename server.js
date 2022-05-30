require('dotenv').config();
const createHttpError = require('http-errors');
const express = require('express');

const app = express();

app.use(express.static('FrontEnd'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
