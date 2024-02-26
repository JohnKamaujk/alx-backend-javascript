const http = require('http');
const PORT = 1245;
const HOST = 'localhost';

// Create HTTP server
const app = http.createServer();
app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';
  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(responseText)
  });
  // Write the response
  res.end(responseText);
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
