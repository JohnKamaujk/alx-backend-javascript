const http = require('http');

// Create HTTP server
const app = http.createServer((_, res) => {
  const responseText = 'Hello Holberton School!';
  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(responseText)
  });
  // Write the response
  res.end(responseText);
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
