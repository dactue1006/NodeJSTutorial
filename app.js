const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.send('Hello Express!')
})

app.listen(port, function () {
  console.log(`Web server is listening on port ${port}!`)
});
