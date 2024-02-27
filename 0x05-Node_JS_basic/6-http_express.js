const express = require('express');

const PORT = 1245;
const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}\n`);
});

module.exports = app;
