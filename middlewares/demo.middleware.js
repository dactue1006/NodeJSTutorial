const loggerMiddleware = function (req, res, next) {
  console.log(`${new Date().toUTCString()}, request to: ${req.method} ${req.path}`);
  next();
}
const routerMiddleware = function(req, res, next) {
  console.log("Router-level middleware");
  next();
}
const friendsMiddleware = function (req, res, next) {
  console.log("middleware friends");
  next();
}
const bookMiddleware1 = function (req, res, next) {
  console.log("middleware book 1");
  if (req.params.id === '0') {
    next('route')
  }
}
const bookMiddleware2 = function (req, res, next) {
  console.log("Middleware book 2");
  next();
}
const bookMiddleware3 = function (req, res, next) {
  console.log("Middleware book 3");
  next();
}

module.exports = {
  loggerMiddleware,
  routerMiddleware,
  friendsMiddleware,
  bookMiddleware1,
  bookMiddleware2, 
  bookMiddleware3
}
