const http = require('http');

const PORT = 1245;
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(responseText)
  });
  res.write(Buffer.from(responseText));
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening at port ${PORT}\n`);
});

module.exports = app;
