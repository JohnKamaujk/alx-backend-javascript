const http = require('http');

const PORT = 1245;
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening at port ${PORT}\n`);
});

module.exports = app;
