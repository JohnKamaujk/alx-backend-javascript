const http = require('http');
const PORT = 1245;
const HOST = 'localhost';

// Create HTTP server
const app = http.createServer((_, res) => {
  const responseText = 'Hello Holberton School!';
  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(responseText));
  res.statusCode = 200;
  // Write the response
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
