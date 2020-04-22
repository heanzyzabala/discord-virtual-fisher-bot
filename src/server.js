require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.DISCORD_BOT_VFABHANDLER_CALLBACK_SERVER_PORT;

let key = '%f';

app.use(express.json());
app.get('/', (req, res) => {
  if (key !== '.') {
    key = '%f';
  }
  return res.status(200).json({ key });
});
app.put('/', (req, res) => {
  key = req.body.key;
  console.log(`DATE: ${Date(Date.now()).toString()}`);
  console.log(`ANSWER: ${key}`);
  return res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`UP: ${Date(Date.now()).toString()}`);
  console.log(`PORT: ${port}`);
});