const express = require('express');
const cors = require('cors');
const path = require('path');
const csvtojson = require('csvtojson');

const app = express();
const port = 4000;

app.use(cors());

app.get('/', (req, res) => res.send('hello world'));

app.get('/api/berlin', async (req, res) => {
  const result = await csvtojson().fromFile(path.join(__dirname, '/db/housing_berlin_2020.csv'));

  return res.send(result);
});

app.listen(port);

console.log(`[app] : http://localhost:${port}`);
