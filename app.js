const express = require('express');
const app = express();
const port = 8080;
const demoRoute = require('./routes/demo.route');
const cookieParser = require('cookie-parser');
const demoMiddleware = require('./middlewares/demo.middleware');

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

app.listen(port, function () {
  console.log(`Web server is listening on port ${port}!`)
});
