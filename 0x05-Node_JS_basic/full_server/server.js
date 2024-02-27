import routes from './routes';

const express = require('express');

const app = express();
const PORT = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
