const express = require('express');
const app = express();
const port = 8080;
const demoRoute = require('./routes/demo.route');

app.use(demoRoute);

app.listen(port, function () {
  console.log(`Web server is listening on port ${port}!`)
});
