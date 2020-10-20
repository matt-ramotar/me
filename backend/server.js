const express = require('express');
const port = 5000;
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(port, () => {
  console.log('Server listening on port', port);
});
