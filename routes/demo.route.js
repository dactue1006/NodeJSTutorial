const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello Express!')
})

router.get('/about', function(req, res) {
  res.send('About')
})

router.get('/about', function(req, res) {
  res.send('About')
})

router.get('/abcd+', function(req, res) {
  res.send('This is match with abcd, abcdd, abcddd,...')
})

router.get("/country/:country/city/:city", function(req, res) {
  console.log("The params is ", req.params);
  res.send(`The country is ${req.params.country} and city is ${req.params.city}`)
})

router.get("/users", function(req, res) {
  console.log("The query param is ", req.query);
  res.send(`name: ${req.query.name}, age: ${req.query.age}`);
})

router.get("/workers", function(req, res) {
  res.send("Workers");
})

module.exports = router;