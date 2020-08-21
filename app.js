const express = require('express');
const app = express();
const port = 8080;
const demoRoute = require('./routes/demo.route');
const demoMiddleware = require('./middlewares/demo.middleware');

const cookieParser = require('cookie-parser');

const path = require('path');
// serving static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// load cookie-parser middleware
app.use(cookieParser());

app.use(demoMiddleware.loggerMiddleware);

app.use("/friends", demoMiddleware.friendsMiddleware);

app.get("/friends", function (req, res, next) {
  res.send("Friends");
})

app.get("/books/:id",
  demoMiddleware.bookMiddleware1,
  demoMiddleware.bookMiddleware2,
  demoMiddleware.bookMiddleware3,
  function (req, res, next) {
    res.send("Books")
  }
);

app.use(demoRoute);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something Went wrong!')
})

app.listen(port, function () {
  console.log(`Web server is listening on port ${port}!`)
});
