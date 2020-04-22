require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.SERVER_PORT;

let key = '%f';

app.use(express.json());
app.get('/', (req, res) => {
  if (key !== 'NO_ANSWER') {
    key = '%f';
  }
  return res.status(200).json({ key });
});
app.put('/', (req, res) => {
  key = req.body.key;
  return res.sendStatus(204);
});
app.listen(PORT, () => console.log(`UP: ${Date(Date.now()).toString()}`));
