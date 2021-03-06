const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const demoRoute = require('./routes/demo.route');
const todoRoute = require('./routes/todo.route');
const demoMiddleware = require('./middlewares/demo.middleware');

const db = require('./database');

const cookieParser = require('cookie-parser');

const path = require('path');
// serving static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// load cookie-parser middleware
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());


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
app.use(todoRoute);

// put this as the last route
app.use(function (req, res, next) {
  res.render('pages/404');
});

// Handler error
app.use(function (err, req, res, next) {
  console.log(err.stack);
  if (err.status === 404) {
    res.render('pages/404');
  } else {
    res.render('pages/error', { err });
  }
})

db.connect()
  .then(function () {
    console.log('Connect to database succefully');
    // db.testDB();
    // db.initDB();
    app.listen(port, function () {
      console.log(`Web server is listening on port ${port}!`)
    });
  })
  .catch(function (err) {
    console.log('Connect to database failed');
    console.log(err);
  })
