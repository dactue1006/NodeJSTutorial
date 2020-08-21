const express = require("express");
const router = express.Router();
const demoMiddleware = require('../middlewares/demo.middleware');

router.use(demoMiddleware.routerMiddleware);

router.get('/', function (req, res) {
  const title = "Welcome to ITMentor";
  const description = "This is a tutorial about NodeJS for Absolute Beginner.";
  const question = "What do you learn about this course?";
  const topics = [
    "What is NodeJS?",
    "Javascript basic with Node Enviroment.",
    "Express framework.",
    "NoSQL and MongoDB.",
    "Deploy with AWS (Amazon Web Services)."
  ];
  res.render('pages/index', {
    title,
    description,
    question,
    topics
  })
})

router.get('/about', function (req, res) {
  res.send('About')
})

router.get('/abcd+', function (req, res) {
  res.send('This is match with abcd, abcdd, abcddd,...')
})

router.get("/country/:country/city/:city", function (req, res) {
  console.log("The params is ", req.params);
  res.send(`The country is ${req.params.country} and city is ${req.params.city}`)
})

router.get("/users", function (req, res) {
  console.log("The query param is ", req.query);
  res.send(`name: ${req.query.name}, age: ${req.query.age}`);
})

router.get("/workers", function (req, res) {
  res.send("Workers");
})

module.exports = router;